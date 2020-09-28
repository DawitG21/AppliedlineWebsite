import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HelperProvider } from 'src/providers/helper.provider';
import { DebugService } from 'src/providers/debug.service';
import { DataProvider } from 'src/providers/data.provider';
// import { ILanguage } from 'src/interface/ILanguage';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  languages = [];
  storedlocale: string;

  constructor(
    @Inject(LOCALE_ID) private _localeId: string,
    private router: Router,
    private helper: HelperProvider,
    private data: DataProvider,
    private _consoleService: DebugService,
  ) {
    this.storedlocale = localStorage.getItem('locale');
    this.languages = this.data.languages;
  }

  ngOnInit() {
    this._consoleService.consoleLocale(this.storedlocale, this._localeId);
    // stored locale exists    
    if (this.storedlocale && this.storedlocale !== this._localeId) {
      this._consoleService.consoleMessage('redirecting');
      this.helper.redirect();
    }
  }

  routeHome(): void {
    this.helper.topFunction();
    this.router.navigate(['/']);
  }

  cacheLocalePreference(locale: string) {
    localStorage.setItem('locale', locale);
  }

  gotoLocale(lang: any): void {
    // First: close any dialog window
    // redirect if selected lang is different from current locale
    if (lang.code !== this._localeId) {
      this.cacheLocalePreference(lang.code);
      this.helper.navigatetoLocale(lang);
    }
  }

}
