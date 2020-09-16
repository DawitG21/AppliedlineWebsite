import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media-area',
  templateUrl: './media-area.component.html',
  styleUrls: ['./media-area.component.css']
})

export class MediaAreaComponent implements OnInit {

  /* embed: 'XRXQwgga5DM'; */

  videoInfo = [
 /*    {
      date: 'October 25, 2018',
      name: 'CargoCanal',
      description: 'Official launch',
      description_2: '#Ethiopia #Maritime #Freightforwarding',
      calendarUrl: 'assets/graphics/calendar.png',
      locationUrl: 'assets/graphics/placeholder.png'
    }, */
    {
      date: 'September 12, 2020',
      name: 'Happy New Year',
      description: 'New Year Greetings',
      description_2: '#2013 #happy #newyear',
      calendarUrl: 'assets/graphics/calendar.png',
      locationUrl: 'assets/graphics/placeholder.png',
      url: 'https://www.youtube.com/watch?v=p6aV-d8GZoc',
    }
  ];

  eventsList = [
    {
      event_1: 'CargoCanal Launch',
      eventUrl: 'assets/graphics/ccz.JPG',
    }
  ];

  newsList = [
    {
      newsTitle: 'Melkam Addis Amet 2013',
      url: 'https://www.youtube.com/watch?v=p6aV-d8GZoc',
      newsUrl: 'assets/graphics/melkam.png',   
    },{
      newsTitle: 'Coming Soon',
      url: 'https://doceipt.com/',
      newsUrl: 'assets/graphics/doci.png',   
    },
    {
      newsTitle: 'Coming Soon',
      url: 'http://inibla.com/',
      newsUrl: 'assets/graphics/ini.png',   
    }
  ];

  archivesList = [
    {
      archive_1: 'Seekerfit',
      archive_2: 'Cost Estimator',
      seekerUrl: 'assets/graphics/seekerfit.png',
      url: 'https://seekerfit.com/#!/'
    },    
    {
      archive_1: 'CargoCanal on iOS and Android',
      archive_2: 'Mobile App',
      seekerUrl: 'assets/graphics/ccan.png',
      url: 'https://play.google.com/store/apps/details?id=com.appliedline.cargocanal'
    }
  ];

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    scroll(0, 0);
    this.ShowEvents(0);
  }

  navigate() {
    this.router.navigate(['/cargocanal']);
  }

  ShowEvents(y: number) {
    const x = document.querySelectorAll('.events');
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('show');
      x[i].classList.add('hide');
    }
    x[y].classList.add('show');
    x[y].classList.remove('hide');
  }

  scrollright() {
    const a = document.getElementById('scroll');
    a.scrollLeft += 400;
  }

  scrollleft() {
    const a = document.getElementById('scroll');
    a.scrollLeft -= 400;
  }

}
