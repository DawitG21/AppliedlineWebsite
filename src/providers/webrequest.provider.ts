import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiProvider } from './api.provider';
import { IWebContact } from '../interfaces/webcontact.interface';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';

/**
 *
 */
@Injectable()
export class WebRequestProvider {

	private readonly routeContact = 'contacts/';

	constructor(private http: HttpClient, private api: ApiProvider
	) { }

	sendRequest(contact: IWebContact): Observable<IWebContact> {
		const url = this.api.apiUrl + this.routeContact;

		console.log(url);
		return this.http.post(url, contact)
			.timeout(10000)
			.map((response) => <IWebContact>response)
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		return Observable.throw(error);
	}
}
