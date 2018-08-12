import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private quizService: QuizServiceClient) { }

  quizId = '';
  quiz = {};

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
        this.quizService.findQuizById(params['quizId'])
          .then(quiz => this.quiz = quiz));
  }

}
