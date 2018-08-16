import {Injectable} from '@angular/core';

@Injectable()
export class SubmissionServiceClient{
  submitQuiz = quiz => {
    console.log(quiz);
    return fetch('http://localhost:3000/api/quiz/' + quiz.quiz + '/submission', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(quiz)
    })
      .then(response => response.json());
  }
}
