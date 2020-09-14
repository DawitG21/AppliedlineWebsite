import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ContactServiceProvider } from 'src/providers/contact.service.provider';
import { HelperProvider } from 'src/providers/helper.provider';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})

export class ContentAreaComponent implements OnInit {

  items: Array<any> = []
  message: string;

  constructor(
    private router: Router,
   // private contactBroadcast: ContactServiceProvider,
    private helper: HelperProvider
  ) {
    this.items = [
      {
        url: 'assets/graphics/et.png',
        title: 'ET Airlines'
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
        url: 'assets/graphics/gss.png',
        title: 'Gibson School Systems'
      },
      {
        url: 'assets/graphics/waafi.png',
        title: 'Waafi Travels'
      },
      {
        url: 'assets/graphics/ebirr2.png',
        title: 'Mobile Money Transfer'
      }
    ]
  }

  ngOnInit(): void {

    // clear broadcast message
   // this.contactBroadcast.updateMessage('');
    const letUsKnowWr = document.getElementById('letusknow-wr');
    const letUsKnowDiv = document.getElementById('letusknow');
    const letUsKnowWrTopOffset = letUsKnowWr.offsetTop;

    // fix the div if topOffset is about 0
    this.helper.fixLetUsKnowDiv(letUsKnowDiv, letUsKnowWrTopOffset);
  }

  onSubmit() {
   // this.contactBroadcast.updateMessage(this.message);
    this.message = '';
    this.helper.topFunction();
    this.router.navigate(['/contact']);
  }


}
