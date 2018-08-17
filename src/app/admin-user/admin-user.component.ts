import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  courses = [];
  sections = [];
  selectedCourse;
  section = {
    title: '',
    seats: ''
  };
  addBtn;

  quizzes = {};

  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient,
              private quizService: QuizServiceClient,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

  showSections(course) {
    const courseId = course.id;
    this.selectedCourse = course;
    this.sectionService
      .findSectionsForCourse(courseId)
      .then(sections => {
        this.sections = sections;
      });
  }

  addSection(section) {
    section.courseId = this.selectedCourse.id;
    console.log(section);
    if (section.title === undefined) {
      section.title = this.selectedCourse.title + ' Section 1';
    }
    this.sectionService
      .createSection(section)
      .then(() => this.renderSections());
  }

  deleteSection(sectionId) {
    this.sectionService
      .deleteSection(sectionId)
      .then(() => this.renderSections()
      );
  }

  updateSection(section) {
    this.section = section;
    console.log(this.addBtn);
    this.sectionService
      .updateSection(section);
      // .then(() => this.renderSections());
  }

  renderSections() {
    this.section = {
      title: '',
      seats: ''
    };
    this.sectionService.findSectionsForCourse(this.selectedCourse.id)
      .then(sections => this.sections = sections);
  }

  viewQuizzes() {
    this.quizService
      .findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
  }

  viewSubmissionsForQuiz = quizId => {
    this.router.navigate(['/quiz/' + quizId + '/submissions']);
  }

}
