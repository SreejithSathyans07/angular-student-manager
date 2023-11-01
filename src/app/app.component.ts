import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  isUserLoggedIn: boolean = false;
  title: string = 'student-manager'

  constructor(private location: Location, private router: Router, private authService: AuthService){

  }
  ngOnInit(): void {
    this.authService.isLoggedInObserver.subscribe(status => {
      const userLoggedIn = localStorage.getItem('userLoggedIn')
      this.isUserLoggedIn = userLoggedIn === 'true'? true : false;
    })
  }
}
