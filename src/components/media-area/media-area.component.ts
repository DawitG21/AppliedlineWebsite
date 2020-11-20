import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DataProvider } from 'src/providers/data.provider';

@Component({
  selector: 'app-media-area',
  templateUrl: './media-area.component.html',
  styleUrls: ['./media-area.component.css']
})

export class MediaAreaComponent implements OnInit {
 
  videoInfo = []
  eventsList = []
  newsList = []
  archivesList = []
  
  constructor(private router: Router, private sanitizer: DomSanitizer, private data: DataProvider) {
    this.videoInfo = this.data.videoInfo
    this.eventsList = this.data.eventsList
    this.newsList = this.data.newsList
    this.archivesList = this.data.archivesList
   }

  ngOnInit(): void {
    scroll(0, 0);
    this.ShowEvents(0);
  }

  /* navigate() {
    this.router.navigate(['/cargocanal']);
  } */

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
