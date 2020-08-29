import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperProvider } from 'src/providers/helper.provider';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private helper: HelperProvider) { }

  ngOnInit(): void {
  }

  openTC() {
    this.helper.topFunction();
    this.router.navigate(['/terms&conditions']);
  }

}
