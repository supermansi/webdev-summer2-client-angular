import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes = []

  q = {
    title: 'test'
  }

  constructor(private quizService: QuizServiceClient) { }

  ngOnInit() {
    this.quizService
      .createQuiz(this.q);
/*      .findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);*/
  }

}
