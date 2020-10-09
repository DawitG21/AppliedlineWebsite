import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from './api.provider';
import { IWebContact } from '../interfaces/webcontact.interface';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { throwError } from 'rxjs';
import { timeout } from 'rxjs/internal/operators/timeout';

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

		return this.http.post(url, contact)
			.pipe(map((response: any) => response), catchError(this.handleError), timeout(15000));
	}

	private handleError(error: Response) {
		return throwError(error);
	}
}
