import { Component, OnInit } from '@angular/core';
import { WebRequestProcessor } from 'src/processors/webrequest.processor';
import { ContactServiceProvider } from 'src/providers/contact.service.provider';
import { ConstantsProvider } from 'src/providers/constants.provider';
import { IWebContact } from 'src/interfaces/webcontact.interface';
import { WebContact } from '../../models/webcontact.model';
import { Recapture } from '../../models/googlerecapture.model';
import { IRecapture } from 'src/interfaces/googlerecapture.interface';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../contact-dialog/dialog.component';
import { DebugService } from 'src/providers/debug.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  latitude = 8.9887529;
  longtiude = 38.7890061;
  googleRecapture: IRecapture;

  contact: IWebContact;
  processing: boolean;

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Ethiopia, CountryISO.Kenya, CountryISO.Canada, CountryISO.Nigeria];
  phoneForm = new FormGroup({
    Phone: new FormControl(undefined, [Validators.required]),
    RequestType: new FormControl(undefined, [Validators.required]),
    Email: new FormControl(undefined, [Validators.required]),
    MessageText: new FormControl(undefined, [Validators.required]),
    ContactName: new FormControl(undefined, [Validators.required]),
    reCAPTCHA: new FormControl(undefined, [Validators.required]),
  });

  constructor(
    private processor: WebRequestProcessor,
    private contactBroadcast: ContactServiceProvider,
    private constants: ConstantsProvider,
    public dialog: MatDialog,
    private _consoleService: DebugService,
  ) {
    this.initRecapture();
  }

  ngOnInit() {
    scroll(0, 0);
    this.initContactForm();
    // init listener
    this.contactBroadcast.currentMessage.subscribe(message => {
      this.contact.MessageText = message;
      if (message.length > 0) {
        this.contact.RequestType = this.constants.PURCHASE;
      }
    });
  }

  initRecapture(): any {
    this.googleRecapture = new Recapture();
    this.googleRecapture.siteKey = '6LcqBNIZAAAAAGm50pk57ZZtt7zzNQ4BVxuY_Qv5';
    this.googleRecapture.theme = 'Light';
    this.googleRecapture.size = 'Normal';
  }

  initContactForm(): any {
    this.contact = new WebContact();
    this.contact.RequestType = this.constants.SUBJECT;
  }

  onSubmit(form: NgForm): void {
    this.processing = true;
    this.phoneForm.value.Phone = this.phoneForm.value.Phone.dialCode.slice(1) + "-" + this.phoneForm.value.Phone.number.replaceAll(" ", "");
    this.contact = this.phoneForm.value as IWebContact;
    this._consoleService.consoleMessage(this.contact);

    this.processor.sendRequest(this.contact)
      .then((value) => {
        this.processing = false;
        this.dialog.open(DialogComponent, {
          width: '450px',
          data: { message: this.constants.MESSAGE_CONTACT_REQUEST_SUCCESS }
        });
        this._consoleService.consoleContactForm('SuccessReason:', value);     
        form.resetForm();
      }, (reason) => {
        this.processing = false;
        this.dialog.open(DialogComponent, {
          width: '450px',
          data: { message: this.constants.MESSAGE_CONTACT_REQUEST_ERROR }
        });
        this._consoleService.consoleContactForm('ErrorReason:', reason);        
        form.resetForm();
      }).catch(() => {
        // error: redirect to error page
        this.processing = false;
      });
  }

}
