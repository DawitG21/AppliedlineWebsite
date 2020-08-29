import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { PlatformLocation, APP_BASE_HREF } from '@angular/common';
import { DebugService } from 'src/providers/debug.service';

@Injectable()
export class HelperProvider {

	storedlocale: string;

	constructor(
		@Inject(LOCALE_ID) private _localeId: string,
		@Inject(APP_BASE_HREF) private _baseHref: string,
		private _consoleService: DebugService,
		private _location: PlatformLocation
	) {
		this.storedlocale = localStorage.getItem('locale');
	}


	redirect() {
		let langExist = false;
		// navigating from existing locale e.g. /am/ or /inibla/am/
		if (this._baseHref.indexOf(`/${this._localeId}/`) !== -1) {
			this._baseHref = this._baseHref.replace(this._localeId, this.storedlocale);
			langExist = true;
		}
		// navigating from root baseHref e.g / or /inibla/
		if (!langExist && this.storedlocale && this.storedlocale !== this._localeId) {
			this._baseHref = `${this._baseHref}${this.storedlocale}/`
		}

		let port = this._location.port.length > 0 ? `:${this._location.port}` : '';
		let url = `${this._location.protocol}//${this._location.hostname}${port}${this._baseHref}`;
		this._consoleService.consoleNgInit(url, this.storedlocale, this._location);
		window.location.href = url;
	}

	navigatetoLocale(lang: any) {
		let langExist = false;
		// navigating from existing locale e.g. /am/ or /inibla/am/
		if (this._baseHref.indexOf(`/${this._localeId}/`) !== -1) {
			this._baseHref = this._baseHref.replace(this._localeId, lang.code);
			langExist = true;
		}
		// navigating from root baseHref e.g / or /inibla/
		if (!langExist) {
			this._baseHref = `${this._baseHref}${lang.code}/`
		}

		let port = this._location.port.length > 0 ? `:${this._location.port}` : '';
		let url = `${this._location.protocol}//${this._location.hostname}${port}${this._baseHref}`;
		this._consoleService.consoleGoLocale(url, this.storedlocale, this._location);
		window.location.href = url;
	}

	urlIsValid(url: string): boolean {
		const regexUrl = /https?:\/\/[a-zA-Z]+.+\.[a-zA-Z]{2,}/;
		if (regexUrl.test(url)) {
			return true;
		}
		return false;
	}

	emailIsValid(email: string): boolean {
		const regexEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/;
		return regexEmail.test(email);
	}

	phoneIsValid(phone: string): boolean {
		const regexPhone = /\+[1-9]{1,3}?[0-9]{9,11}/;
		return regexPhone.test(phone);
	}

	passwordComplexityPassed(password: string): boolean {
		const minMaxLength = /[\S]{6,32}/,
			upper = /[A-Z]/,
			lower = /[a-z]/,
			number = /[0-9]/,
			special = /[ !"#$%&'()*+,\-./:;<=>?@^]/;

		if (minMaxLength.test(password) &&
			upper.test(password) &&
			lower.test(password) &&
			number.test(password) &&
			special.test(password)
		) {
			return true;
		}
		return false;
	}

	topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
}
