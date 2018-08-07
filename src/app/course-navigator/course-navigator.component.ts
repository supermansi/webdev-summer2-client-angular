import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  selectedCourse = {};
  selectedModule = {};
  selectedLesson = {};
  selectedTopic = {};

  constructor(private courseService: CourseServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
    this.selectedModule = {};
    this.selectedLesson = {};
    this.selectedTopic = {};
    // alert(course.title);
  }

  selectModule(module) {
    this.selectedModule = module;
    this.selectedLesson = {};
    this.selectedTopic = {};
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
    this.selectedTopic = {};
  }

  selectTopic(topic) {
    this.selectedTopic = topic;
  }

  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}