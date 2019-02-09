import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cargocanal-event-selector',
	templateUrl: './cargocanal-event.component.html',
	styleUrls: ['./cargocanal-event.component.css']
})
export class CargocanalEventComponent implements OnInit {
	index = 1;

	ngOnInit() {
		scroll(0, 0);
		this.showSlides(this.index);
	}

	nextAndPrevSlide(n: number) {
		this.showSlides(this.index += n);
	}

	currentSlide(n: number) {
		this.showSlides(this.index = n);
	}

	showSlides(n: number) {
		let i: number;
		const slides = document.querySelectorAll('.mySlides');
		const smallImages = document.querySelectorAll('.small-images');
		const imageDescription = document.getElementById('description');
		if (n > slides.length) {
			this.index = 1;
		}

		if (n < 1) {
			this.index = slides.length;
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].classList.remove('show');
			slides[i].classList.add('hide');
		}

		for (i = 0; i < smallImages.length; i++) {
			smallImages[i].className = smallImages[i].className.replace('active', '');
		}
		slides[this.index - 1].classList.remove('hide');
		slides[this.index - 1].classList.add('show');
		smallImages[this.index - 1].className += ' active';
		/* imageDescription.innerHTML = smallImages[this.index - 1].alt; */
	}
}
