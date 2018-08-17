import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubmissionServiceClient} from '../services/submission.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  submission = {};
  constructor(private router: ActivatedRoute,
              private submissionService: SubmissionServiceClient) { }

  ngOnInit() {
    this.router.params.subscribe(params =>
      this.submissionService
        .findSubmissionById(params['submissionId'])
        .then(s => {
          this.submission = s;
          console.log(s);
        }));
  }

}
