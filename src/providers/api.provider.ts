import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
	appHost = 'https://appliedline.com'; // does not end with /
	apiHost = 'https://appliedline.com/'; // ends with /
	apiBaseUrl = this.apiHost + 'webapi/';

	apiUrl(): string {
		return this.apiBaseUrl + 'api/';
	}
}
