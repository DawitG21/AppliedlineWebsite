import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-et-iata-ndc',
  templateUrl: './et-iata-ndc.component.html',
  styleUrls: ['./et-iata-ndc.component.css']
})

export class EtIataNdcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
