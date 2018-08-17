import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {SubmissionServiceClient} from '../services/submission.service.client';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  submissions = [];
  students = [];

  constructor(private router: ActivatedRoute,
              private submissionClient: SubmissionServiceClient,
              private userService: UserServiceClient) { }

  ngOnInit() {
    this.router.params.subscribe(params =>
      this.submissionClient
      .findSubmissionsForQuiz(params['quizId'])
        .then(subs => {
          console.log(subs);
          this.submissions = subs;
        }));
  }

  findStudent = studentId => {
    const student = this.userService.findUserById(studentId);
    console.log(student);
    return student;
  }


}
