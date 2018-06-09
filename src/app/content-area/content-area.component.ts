import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	// selector: 'content-area',
	templateUrl: 'content-area.component.html',
	styleUrls: ['content-area.component.css']
})
export class ContentAreaComponent implements OnInit {

	ngOnInit() {
		window.onscroll = function () {
			fixLetUsKnowDiv();
		};

		const letUsKnowDiv = document.getElementById('letusknow');
		const letUsKnowTopOffset = letUsKnowDiv.offsetTop;

		function fixLetUsKnowDiv() {
			if (window.scrollY >= letUsKnowTopOffset + 30) {
				letUsKnowDiv.classList.add('myfixed');
			} else {
				letUsKnowDiv.classList.remove('myfixed');
			}
		}

		let slideIndex = 0;
		showSlides();

		function showSlides() {
			const slides = document.getElementsByClassName('mySlides');
			const dots = document.getElementsByClassName('dot');

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



/*
	items: Array<any> = [];

	constructor (){
		this.items= [

				{ name : './assets/image1.png'},
				{ name : './assets/image2.jpg'},
				{ name : './assets/image3.jpg'},
				{ name : './assets/image4.png'},
				{ name : './assets/image5.png'},
				{ name : './assets/photo.jpg'},
				{ name : './assets/image1.png'},
				{ name : './assets/image2.jpg'},
				{ name : './assets/image3.jpg'},
				{ name : './assets/image4.png'},
				{ name : './assets/image5.png'},
				{ name : './assets/photo.jpg'},
				{ name : './assets/image1.png'},
				{ name : './assets/image2.jpg'},
				{ name : './assets/image3.jpg'},
				{ name : './assets/image4.png'},
				{ name : './assets/image5.png'},
				{ name : './assets/photo.jpg'},


		];
*/
/*
		window.onscroll=function(){
			dawit();
		}
		let a,b;
		a=document.getElementById('letusknow');
		b=a.offsetTop;
		function dawit(){
			if(window.scrollY>=b){
				a.classList.add('myfixed');
			}
			else{
				a.classList.remove('myfixed');
			}
		}
	}
*/
