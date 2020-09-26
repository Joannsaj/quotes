import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { quote: 'Life is short, live it while you can', name: 'Joan' },
    { quote: 'Life is what you make it', name: 'Joan' },
    { quote: ' Its always the small things', name: 'Joan' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
