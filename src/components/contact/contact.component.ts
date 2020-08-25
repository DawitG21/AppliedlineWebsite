import { Component, OnInit } from '@angular/core';
import { IWebContact } from 'src/interfaces/webcontact.interface';
import { WebRequestProcessor } from 'src/processors/webrequest.processor';
import { ContactServiceProvider } from 'src/providers/contact.service.provider';
import { ConstantsProvider } from 'src/providers/constants.provider';
import { WebContact } from '../../models/webcontact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  latitude = 8.9887529;
  longtiude = 38.7890061;

  contact: IWebContact;
  processing: boolean;
  showDialog: boolean;
  dialogMessage: string;

  constructor(private processor: WebRequestProcessor,
    private contactBroadcast: ContactServiceProvider,
    private constants: ConstantsProvider
  ) {
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

  initContactForm(): any {
    this.contact = new WebContact();
    this.contact.RequestType = this.constants.SUBJECT;
  }

  onSubmit(): void {
    this.processing = true;

    this.processor.sendRequest(this.contact)
      .then((value) => {
        this.processingComplete(this.constants.MESSAGE_CONTACT_REQUEST_SUCCESS);
        this.initContactForm();
      }, (reason) => {
        this.processingComplete(this.constants.MESSAGE_CONTACT_REQUEST_ERROR);
      }).catch(() => {
        // error: redirect to error page
        this.processing = false;
      });
  }

  processingComplete(dialogMessage: string): void {
    this.processing = false;
    this.showDialog = true;
    this.dialogMessage = dialogMessage;
  }

  phoneChanged(): void {
    this.contact.Phone = this.contact.Phone.replace(' ', '');
  }
}
