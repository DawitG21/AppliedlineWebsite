import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceProvider } from 'src/providers/contact.service.provider';
import { NgImageSliderComponent } from 'ng-image-slider';
import { HelperProvider } from 'src/providers/helper.provider';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})

export class ContentAreaComponent implements OnInit {

  @ViewChild('nav') slider: NgImageSliderComponent;

  clients: Array<object> = [
    {
      image: 'assets/graphics/et.png',
      thumbImage: 'assets/graphics/et.png',
      title: 'Ethiopian Airlines',
      alt: 'ETA'
    },
    {
      image: 'assets/graphics/ebirr2.png',
      thumbImage: 'assets/graphics/ebirr2.png',
      title: 'EBirr Payment Solution',
      alt: 'EBIRR'
    },
    {
      image: 'assets/graphics/9.9.png',
      thumbImage: 'assets/graphics/9.9.png',
      title: 'Ethiopian Maritime Authority',
      alt: 'EMAA'
    },
    {
      image: 'assets/graphics/waafi.png',
      thumbImage: 'assets/graphics/waafi.png',
      title: 'Waafi Travel',
      alt: 'WAAFI'
    },
    {
      image: 'assets/graphics/gss.png',
      thumbImage: 'assets/graphics/gss.png',
      title: 'Gibson School Systems',
      alt: 'GSS'
    },
    
  ]

  message: string;

  constructor(private router: Router,
    private contactBroadcast: ContactServiceProvider,
    private helper: HelperProvider
  ) { }

  ngOnInit(): void {
    /*  scroll(0, 0); */

    // clear broadcast message
    this.contactBroadcast.updateMessage('');

    const letUsKnowWr = document.getElementById('letusknow-wr');
    const letUsKnowDiv = document.getElementById('letusknow');
    const letUsKnowWrTopOffset = letUsKnowWr.offsetTop;

    // fix the div if topOffset is about 0
    this.fixLetUsKnowDiv(letUsKnowDiv, letUsKnowWrTopOffset);
    this.beginSlideshow();
  }

  /*  prevImageClick() {
     this.slider.prev();
   }
 
   nextImageClick() {
     this.slider.next();
   } */

  onSubmit() {
    this.contactBroadcast.updateMessage(this.message);
    this.message = '';
    this.helper.topFunction();
    this.router.navigate(['/contact']);
  }

  scroll(el: HTMLElement): void {    
    this.router.navigate(['home']);
    el.scrollIntoView({ behavior: 'smooth' });
  }

  fixLetUsKnowDiv(letUsKnowDiv: any, letUsKnowWrTopOffset: any) {
    window.onscroll = function () {
      if (window.scrollY >= letUsKnowWrTopOffset + 30) {
        letUsKnowDiv.classList.add('myfixed');
      } else {
        letUsKnowDiv.classList.remove('myfixed');
      }
    };
  }

  beginSlideshow() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      const slides = document.getElementsByClassName('mySlides');
      const dots = document.getElementsByClassName('dot');

      if (!slides) {
        return;
      }

      for (let i = 0; i < slides.length; i++) {
        const currentSlide = slides[i];
        if (currentSlide) {
          currentSlide.classList.add('hidden');
          currentSlide.classList.remove('show');
        }
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      // update active dot
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }

      const prevSlide = slides[slideIndex - 1];

      if (prevSlide) {
        prevSlide.classList.add('show');
        prevSlide.classList.remove('hidden');
        dots[slideIndex - 1].className += ' active';
      }

      // Change image every few seconds
      setTimeout(showSlides, 5000);
    }
  }

}
