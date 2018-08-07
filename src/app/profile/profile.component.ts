import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = {
    _id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    address: ''
  }

  constructor(private userServiceClient: UserServiceClient,
              private router: Router) { }

  ngOnInit() {
    this.userServiceClient.currentUser()
      .then(user => {
          console.log(user);
          this.currentUser = user;
        });
  }

  updateUser() {
    this.userServiceClient
      .updateUser(this.currentUser)
      .then(u => {
        alert('Profile successfully updated!');
        this.router.navigate(['profile']);
      });
  }

  logout() {
    this.userServiceClient.logout()
      .then(() => this.router.navigate(['login']));
  }

}
