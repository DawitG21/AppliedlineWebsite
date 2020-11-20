import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data.provider';

@Component({
  selector: 'app-banner-dialog',
  templateUrl: './banner-dialog.component.html',
  styleUrls: ['./banner-dialog.component.css']
})
export class BannerDialogComponent implements OnInit {

  bannerMsg = [];

  constructor(private message: DataProvider,) {
    this.bannerMsg = this.message.bannerMsg;
  }

  ngOnInit(): void {
  }

}
