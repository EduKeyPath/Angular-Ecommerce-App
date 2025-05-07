import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angPoc';
  loginPage = '';

  constructor(location: Location) {
      if(location.path() != ''){
        this.loginPage = location.path();
      }
      // console.log(this.loginPage)
  }

  ngOnInit(): void {
  }

}
