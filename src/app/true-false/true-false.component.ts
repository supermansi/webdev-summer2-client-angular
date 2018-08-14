import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  @Input() question;
  selected = trueOrFalse => {
    this.question.trueFalseAnswer = trueOrFalse;
  }

  constructor() { }

  ngOnInit() {
  }

}
