import { Component, OnInit } from '@angular/core';
import { IWebContact } from '../../interfaces/webcontact.interface';
import { WebContact } from '../../models/webcontact.model';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	latitude = 8.988759;
	longtiude = 38.788968;

	contact: IWebContact;

	constructor() {
		this.contact = new WebContact();
		this.contact.RequestType = 'Subject';
	}

	ngOnInit() {
	}

	onSubmit(): void {
		console.log(this.contact);
	}
}
