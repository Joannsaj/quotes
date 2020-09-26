import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Life is short, live it while you can', 'Joan'),
    new Quote('Life is what you make it', 'mee'),
    new Quote(' Its always the small things', 'John')
  ]
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
