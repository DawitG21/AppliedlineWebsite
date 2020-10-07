import { IWebContact } from '../interfaces/webcontact.interface';

export class WebContact implements IWebContact {
	ContactName: string;
	Email: string;
	Phone: string; // string
	MessageText: string;
	RequestType: string;
}
