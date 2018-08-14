import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mulitple-choice',
  templateUrl: './mulitple-choice.component.html',
  styleUrls: ['./mulitple-choice.component.css']
})
export class MulitpleChoiceComponent implements OnInit {

  @Input() question;

  selected = choice => {
    this.question.multipleChoiceAnswer = this.question.choices.indexOf(choice);
  }

  constructor() { }

  ngOnInit() {
  }

}
