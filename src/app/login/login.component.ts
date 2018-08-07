import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  ngOnInit() {
  }

  login(username, password)  {
    const user  = {
      username,
      password
    };
    this.userService.login(user)
      .then(u => {
        console.log(u);
        this.router.navigate(['profile']);
      });
  }

}
