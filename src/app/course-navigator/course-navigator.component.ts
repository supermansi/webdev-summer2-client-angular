import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  modules = [];
  selectedCourse = {};
  selectedModule = {};
  selectedLesson = {};
  selectedTopic = {};

  constructor(private courseService: CourseServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadModulesForCourse(params['courseId']));
  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.selectedModule = {};
    this.selectedLesson = {};
    this.selectedTopic = {};
    // alert(course.title);
  }
  loadModulesForCourse(courseId) {
    this.courseService
      .findModulesForCourse(courseId)
      .then(modules => this.modules = modules);
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
