import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
	readonly apiServer = 'http://localhost:59440/'; // 'https://appliedline.com/'; // ends with /
	readonly apiBaseUrl = this.apiServer; // + 'appliedlineapi/';

	readonly apiUrl = this.apiBaseUrl + 'api/v1/';
}
