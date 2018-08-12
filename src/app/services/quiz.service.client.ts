import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  createQuiz = quiz => {
    fetch('http://localhost:3000/api/quiz')
      .then(response => response.json());
  }

  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quiz')
      .then(response => response.json())

  findQuizById = quizId => {}

  updateQuiz = (quizId, quiz) => {}

  deleteQuiz = (quizId) => {};

}
