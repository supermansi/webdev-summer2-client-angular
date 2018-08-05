import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private userService: UserServiceClient) { }

  ngOnInit() {
  }

  login(username, password)  {
    const user  = {
      username,
      password
    };
    this.userService.login(user);
  }

}
