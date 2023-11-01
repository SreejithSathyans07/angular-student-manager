import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isUserLoggedIn: boolean = false;
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  isLoggedInObserver = this.isLoggedInSubject.asObservable();

  constructor(private router: Router) { }

  getLoggedInStatus(){
    this._isUserLoggedIn = localStorage.getItem('userLoggedIn') === 'true' ? true : false;
    return this._isUserLoggedIn;
  }

  userLogin(username: string, password: string){
    if(username === 'john.doe' && password === 'admin@123'){
      localStorage.setItem('userLoggedIn', 'true');
      this.isLoggedInSubject.next(true)
      this._isUserLoggedIn = true;
      this.router.navigate(['user-home']);
    }else{
      localStorage.setItem('userLoggedIn', 'false');
      this.isLoggedInSubject.next(false)
      this._isUserLoggedIn = false;
      this.router.navigate(['']);
    }
  }

  userLogout(){
    localStorage.setItem('userLoggedIn', 'false');
    this.isLoggedInSubject.next(false);
    this._isUserLoggedIn = false;
    this.router.navigate([''])
  }
}
