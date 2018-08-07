import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  ngOnInit() {
  }

  register(username, password, password2) {
    if (password === password2) {
      const user = {
        username,
        password
      };
      this.userService.register(user)
        .then(u => this.router.navigate(['profile']));
    } else {
      alert('incorrect passwords!');
    }
  }

}
