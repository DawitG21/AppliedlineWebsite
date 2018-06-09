import { Component, OnInit } from '@angular/core';

@Component({
	// selector: 'contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	latitude = 8.988759;
	longtiude = 38.788968;

	constructor() { }

	ngOnInit() {
	}

}
