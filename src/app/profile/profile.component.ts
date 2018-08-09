import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';

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
    address: '',
    sections: []
  }

  constructor(private userServiceClient: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) { }

  ngOnInit() {
    this.userServiceClient.currentUser()
      .then(user => {
          this.currentUser = user;
        });
/*    if (this.currentUser.sections === []) {
      this.currentUser.sections = 'You are not enrolled in any courses yet! Click below to get started.';
    }*/
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
