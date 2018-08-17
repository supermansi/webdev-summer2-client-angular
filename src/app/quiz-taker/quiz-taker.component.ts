import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {SubmissionServiceClient} from '../services/submission.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private quizService: QuizServiceClient,
              private userService: UserServiceClient,
              private submissionService: SubmissionServiceClient) { }

  quizId = '';
  quiz = {
    title: '',
    questions: ''
  };
  newQuiz = {
    student: null,
    quiz: null,
    questions: [],
    answers: []
  };
  submit = quiz => {
    this.newQuiz.quiz = quiz._id;
    this.newQuiz.answers = [];
    this.newQuiz.questions = [];
    this.userService.currentUser()
      .then(student => {
        this.newQuiz.student = student._id;
        quiz.questions.forEach(value => {
          this.newQuiz.questions.push(value._id);
          switch (value.questionType) {
            case 'ESSAY':
              this.newQuiz.answers.push({
                essayAnswer: value.essayAnswer
              });
              break;
              case 'FILL_BLANKS':
              this.newQuiz.answers.push({
                fillBlanksAnswer: value.fillBlanksAnswer});
              break;
              case 'CHOICE':
              this.newQuiz.answers.push({
                multipleChoiceAnswer: value.multipleChoiceAnswer});
              break;
              case 'TRUE_FALSE':
              this.newQuiz.answers.push({
                trueFalseAnswer: value.trueFalseAnswer});
              break;
          }
        });
    /*    let question in quiz.questions {
          if (question.questionType === 'ESSAY') {    }
            quiz.answers.push(question.answer);
        }*/
        /*quiz.answers = {
          fillBlanksAnswers: quiz.question.fillBlanksAnswers,
          trueFalseAnswer: quiz.question.trueFalseAnswer,
          essayAnswer: quiz.question.essayAnswer,
          multipleChoiceAnswer: quiz.question.multipleChoiceAnswer
        }*/
        console.log(this.newQuiz);
        this.submissionService
          .submitQuiz(this.newQuiz)
          .then( submission => console.log(submission));
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
        this.quizService.findQuizById(params['quizId'])
          .then(quiz => this.quiz = quiz));
  }

}
