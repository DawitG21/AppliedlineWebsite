import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceProvider } from '../../providers/contact.service.provider';

@Component({
	selector: 'app-content-area',
	templateUrl: './content-area.component.html',
	styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {

	message: string;
	/**
	 *
	 */
	constructor(private router: Router,
		private contactBroadcast: ContactServiceProvider
	) { }


	onSubmit() {
		this.contactBroadcast.updateMessage(this.message);
		this.message = '';
		this.router.navigate(['/contact']);
	}

	ngOnInit() {
		scroll(0, 0);

		const letUsKnowDiv = document.getElementById('letusknow');
		const letUsKnowTopOffset = letUsKnowDiv.offsetTop;

		// fix the div if topOffset is about 0
		this.fixLetUsKnowDiv(letUsKnowDiv, letUsKnowTopOffset);
		this.beginSlideshow();
	}

	fixLetUsKnowDiv(letUsKnowDiv, letUsKnowTopOffset) {
		window.onscroll = function () {
			if (window.scrollY >= letUsKnowTopOffset + 30) {
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
				slides[i].classList.add('hidden');
				slides[i].classList.remove('show');
			}

			slideIndex++;
			if (slideIndex > slides.length) {
				slideIndex = 1;
			}

			// update active dot
			for (let i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(' active', '');
			}

			slides[slideIndex - 1].classList.add('show');
			slides[slideIndex - 1].classList.remove('hidden');
			dots[slideIndex - 1].className += ' active';

			// Change image every few seconds
			setTimeout(showSlides, 5000);
		}
	}
}
