import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
	readonly apiServer = 'http://192.168.0.101/'; // 'https://appliedline.com/'; // ends with /
	readonly apiBaseUrl = this.apiServer + 'appliedlineapi/';

	readonly apiUrl = this.apiBaseUrl + 'api/v1/';
}
