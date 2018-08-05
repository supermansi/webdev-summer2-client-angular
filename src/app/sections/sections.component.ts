import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

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

  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
    this.sectionService
      .findSectionsForCourse(course.id)
      //.findAllSections()
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

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
