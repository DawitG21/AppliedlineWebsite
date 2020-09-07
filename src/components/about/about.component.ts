import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceProvider } from 'src/providers/contact.service.provider';
import { HelperProvider } from 'src/providers/helper.provider';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  message: string;

  constructor(
    private router: Router,
    private contactBroadcast: ContactServiceProvider,
    private helper: HelperProvider
  ) { }

  ngOnInit(): void {
    scroll(0, 0);
    const letUsKnowWr = document.getElementById('letusknow-wr');
    const letUsKnowDiv = document.getElementById('letusknow');
    const letUsKnowWrTopOffset = letUsKnowWr.offsetTop;
    
    // fix the div if topOffset is about 0
    this.helper.fixLetUsKnowDiv(letUsKnowDiv, letUsKnowWrTopOffset);
  }

  onSubmit() {
    this.contactBroadcast.updateMessage(this.message);
    this.message = '';
    this.helper.topFunction();
    this.router.navigate(['/contact']);
  }

}
