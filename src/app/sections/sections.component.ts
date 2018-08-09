import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  courses = [];
  sections = [];
  selectedCourse = {
    id: -1
  };
  section = {};
  student;

  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient,
              private userService: UserServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  loadSections(courseId) {
    this.selectedCourse.id = courseId;
    this.sectionService
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.sectionService
      .findSectionsForCourse(course.id)
      // .findAllSections()
      .then(sections => this.sections = sections);
  }

  addSection(section) {
    section.courseId = this.selectedCourse.id;
    this.sectionService
      .createSection(section)
      .then(() => this.sectionService.findSectionsForCourse(this.selectedCourse.id)
        .then(sections => this.sections = sections));
    console.log(section);
  }

  enroll(section) {
    console.log(this.student._id);
    console.log(section._id);
    this.sectionService
      .enroll(this.student._id, section._id)
      .then((enrollment) => {
        console.log(enrollment);
        this.router.navigate(['profile']);
      });
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
    this.userService.currentUser()
      .then(user => this.student = user);
  }

}
