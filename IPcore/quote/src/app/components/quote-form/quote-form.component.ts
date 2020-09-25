import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IQuote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class GoalFormComponent implements OnInit {
  newQuote = new IQuote(0, "", "", new Date());
  @Output() addGoal = new EventEmitter<IQuote>();

  submitQuote() {
    let quoteCopy = Object.assign({}, this.newQuote);
    this.addGoal.emit(quoteCopy);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
