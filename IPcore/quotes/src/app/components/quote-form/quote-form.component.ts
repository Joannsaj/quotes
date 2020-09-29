import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote('', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    let quoteCopy = Object.assign({}, this.newQuote);
    this.addQuote.emit(quoteCopy);
  }
  constructor() { }


  ngOnInit(): void {
  }

}
