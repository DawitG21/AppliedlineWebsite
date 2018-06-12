import { Component, OnInit } from '@angular/core';
import { IWebContact } from '../../interfaces/webcontact.interface';
import { WebContact } from '../../models/webcontact.model';
import { WebRequestProcessor } from '../../processors/webrequest.processor';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	latitude = 8.988759;
	longtiude = 38.788968;

	contact: IWebContact;

	constructor(private processor: WebRequestProcessor) {
	}

	ngOnInit() {
		this.initContactForm();
	}

	initContactForm(): any {
		this.contact = new WebContact();
		this.contact.RequestType = 'Subject';
	}

	onSubmit(): void {
		this.processor.sendRequest(this.contact)
			.then((value) => {
				console.log('success');
				this.initContactForm();
			}, (reason) => {
				console.log('rejected');
			}).catch(() => {
				// error occured
				console.log('catch error');
			});
	}
}
