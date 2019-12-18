import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LogindataService } from './../../logindata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private logindataService: LogindataService) { }

  username: string;
  password: string;

  loggedIn: Boolean;

  ngOnInit() {
    this.getLoggedIn();
    this.loggedIn = false;
  }

  getLoggedIn() {
    this.logindataService.getLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn);
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["users-list"]); 
      this.loggedIn = true;
      this.logindataService.setLoggedIn(true);
    } else {
      alert("Invalid credentials. Use the following details => username: admin, password: admin");
    }
  }
}
