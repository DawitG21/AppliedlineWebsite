import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HelperProvider } from 'src/providers/helper.provider';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  languages = [
    { code: 'en-US', label: 'English' },
    { code: 'am', label: 'Amharic' },
    { code: 'fr', label: 'French' }
  ];

  storedlocale: string;
  closeResult: string;

  constructor(
    private router: Router,
    private helper: HelperProvider,
    // private modalService: NgbModal,
    @Inject(LOCALE_ID) private _localeId: string
  ) { }

  ngOnInit(): void { }

  routeHome(): void {
    this.helper.topFunction();
    this.router.navigate(['/']);
  }

  cacheLocalePreference(locale: string) {
    localStorage.setItem('locale', locale);
  }
  
  gotoLocale(lang: any): void {
    // redirect if selected lang is different from current locale
    if (lang.code !== this._localeId) {
      this.cacheLocalePreference(lang.code);
      this.helper.navigatetoLocale(lang);
    }
  }

}
