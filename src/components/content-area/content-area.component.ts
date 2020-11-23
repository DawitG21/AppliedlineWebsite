import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataProvider } from 'src/providers/data.provider';
import { DebugService } from 'src/providers/debug.service';
import { HelperProvider } from 'src/providers/helper.provider';
import { BannerDialogComponent } from '../banner-dialog/banner-dialog.component';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})

export class ContentAreaComponent implements OnInit {

  items: Array<any> = []
  message: string;
  bannerMsg = [];
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 4, "autoplay": true, "autoplaySpeed": 2000 };

  constructor(
    private router: Router,
    private helper: HelperProvider,
    private data: DataProvider,
    public dialog: MatDialog,
    private console:DebugService,
  ) {
    this.items = [
      {
        url: 'assets/graphics/et.png',
        title: 'Airlines'
      },
      {
        url: 'assets/graphics/ebirr2.png',
        title: 'Mobile Money Transfer'
      },
      {
        url: 'assets/graphics/9.9.png',
        title: '',
        alt: 'EMAA'
      },
      {
        url: 'assets/graphics/waafi.png',
        title: 'Travels'
      },
      {
        url: 'assets/graphics/gss.png',
        title: 'Gibson School Systems'
      }
    ];
    this.bannerMsg = this.data.languages;
  }

  ngOnInit(): void {
    const letUsKnowWr = document.getElementById('letusknow-wr');
    const letUsKnowDiv = document.getElementById('letusknow');
    const letUsKnowWrTopOffset = letUsKnowWr.offsetTop;

    // fix the div if topOffset is about 0
    this.helper.fixLetUsKnowDiv(letUsKnowDiv, letUsKnowWrTopOffset);
  }

  slickInit(e) {
    this.console.consoleMessage(e);
  }

  breakpoint(e) {
    this.console.consoleMessage(e);
  }

  afterChange(e) {
    this.console.consoleMessage(e);
  }

  beforeChange(e) {
    this.console.consoleMessage(e);
  }

  onSubmit() {
    // this.contactBroadcast.updateMessage(this.message);
    this.message = '';
    this.helper.topFunction();
    this.router.navigate(['/contact']);
  }

  routeEvents(): void {
    this.router.navigate(['/etairlinesndc']);
  }

  openDialog() {
    this.dialog.open(BannerDialogComponent, {
      width: '580px',
      data: this.bannerMsg
    });
  }

}
