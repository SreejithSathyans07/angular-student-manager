import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username = '';
  password = '';
  isUserLoggedIn: boolean = false;
  @Output() userLoginStatusChange = new EventEmitter<boolean>();
  constructor(private router: Router, private authService: AuthService){

  }
  ngOnInit(): void {
    if(this.authService.getLoggedInStatus()){
      this.router.navigate(['user-home']);
    }
  }
  login(){
    this.authService.userLogin(this.username, this.password);
  }
}
