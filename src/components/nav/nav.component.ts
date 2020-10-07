import { Router } from '@angular/router';
import { HelperProvider } from 'src/providers/helper.provider';
import { LanguagesDialogComponent } from '../language-dialog/languages-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DataProvider } from 'src/providers/data.provider';
import { DebugService } from 'src/providers/debug.service';
import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

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
    private _consoleService: DebugService,
    private data: DataProvider,
    public dialog: MatDialog,
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

  openDialog() {
    this.dialog.open(LanguagesDialogComponent, {
      width: '450px',
      data: this.languages
    });
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
