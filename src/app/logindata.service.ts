import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogindataService {
  loggedIn: Boolean;

  getLoggedIn(): Observable<Boolean> {
    return of(this.loggedIn);
  }

  setLoggedIn(logged: Boolean) {
    this.loggedIn = logged;
  }

  constructor() { }
}
