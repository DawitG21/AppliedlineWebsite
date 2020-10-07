import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataProvider } from 'src/providers/data.provider';
import { HelperProvider } from 'src/providers/helper.provider';

@Component({
  selector: 'app-languages-dialog',
  templateUrl: './languages-dialog.component.html',
  styleUrls: ['./languages-dialog.component.css']
})

export class LanguagesDialogComponent implements OnInit {

  languages = [];
  storedlocale: string;

  constructor(
    private language: DataProvider,  
    private helper: HelperProvider,
    @Inject(MAT_DIALOG_DATA) public data,
    @Inject(LOCALE_ID) private _localeId: string,
  ) { 
    this.languages = this.language.languages;
  }

  ngOnInit() { }

  cacheLocalePreference(locale: string) {
    localStorage.setItem('locale', locale);
  }

  gotoLocale(lang: any): void {
    if (lang.code !== this._localeId) {
      this.cacheLocalePreference(lang.code);
      this.helper.navigatetoLocale(lang);
    }
  }

}
