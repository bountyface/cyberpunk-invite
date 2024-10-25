import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;

  public login() {
    this.isLoggedIn = true;
  }

  public logout() {
    this.isLoggedIn = false;
  }

  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
