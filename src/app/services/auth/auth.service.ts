import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: { email: string, password: any }): Observable<string | boolean> {
    console.log('Email:', userInfo.email);
    console.log('Password:', userInfo.password);

    if (userInfo.email === 'admin@gmail.com' && userInfo.password === 'admin123') {
      this.setToken('asdfghytretyujklmhgfyuiklkjhg');
      return of('Login successful'); 
    }

    return throwError(() => new Error('Failed Login'));
  }

  logout(){
    this.router.navigate(['login'])
  }
}
