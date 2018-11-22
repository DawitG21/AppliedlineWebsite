import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
selector: 'app-content-area',
templateUrl: './media-area.component.html',
styleUrls: ['./media-area.component.css']
})
/**
 *
 */
export class MediaAreaComponent implements OnInit {

/* embed: 'XRXQwgga5DM'; */

videoInfo = [
{
date: '',
name: 'CargoCanal App',
description: 'Official launch',
description_2: '#Ethiopia #Maritime #Freightforwarding',
calendarUrl: '../../assets/graphics/calendar.png',
locationUrl: '../../assets/graphics/placeholder.png'
},
];

eventsList = [
{
event_1: 'CargoCanal Launch',
eventUrl: '../../assets/graphics/ccz.JPG',
}
];

newsList = [
{
newsTitle: 'Merry Christmass** and',
newsUrl: '../../assets/graphics/xmas.png',
news_Description: '** Happy New Year',
newsTitle_2: 'CargoCanal',
newsDescription_2: 'Now on Google Play & App Store',
newsUrl_2: '../../assets/graphics/ccan.png',
}
];

archivesList = [
{
archive_1: 'Seekerfit',
archive_2: 'Cost Estimator',
seekerUrl: '../../assets/graphics/seekerfit.png',
}
];

constructor(private router: Router, private sanitizer: DomSanitizer) { }
ngOnInit() {
/* this.getEmbedUrl(this.item); */
this.ShowEvents(0);
}

/*  getEmbedUrl(item) {
             return this.sanitizer.bypassSecurityTrustUrl('https://www.youtube.com/embed/' + item.embed + '');
         } */
navigate() {
this.router.navigate(['/cargocanal']);
}

ShowEvents(y) {
const x = document.querySelectorAll('.events');
for (let i = 0; i < x.length; i++) {
x[i].classList.remove('show');
x[i].classList.add('hide');
}
x[y].classList.add('show');
x[y].classList.remove('hide');
}

scrollright() {
let a;
a = document.getElementById('scroll');
a.scrollLeft += 400;
}

scrollleft() {
let a;
a = document.getElementById('scroll');
a.scrollLeft -= 400;
}

}
