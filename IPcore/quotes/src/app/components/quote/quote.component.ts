import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nelson Mandela', 'Joan', new Date(2020, 3, 14)),
    new Quote("Life is what happens when you're busy making other plans.", 'John Lennon', 'Joan', new Date(2020, 3, 14)),
    new Quote('Success is not final; failure is not fatal: It is the courage to continue that counts.', 'Winston S. Churchill', 'Joan', new Date(2020, 3, 14))
  ]
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete Quote ?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addUpVote(index) {
    this.quotes[index].upVote++;
  }
  addDownVote(index) {
    this.quotes[index].downVote++;
  }
  highestUpVote() {
    let highestUpVoteQuote = this.quotes[0];
    for (let i = 1; i < this.quotes.length; i++) {
      if (this.quotes[i].upVote > highestUpVoteQuote.upVote) {
        highestUpVoteQuote = this.quotes[i]
      }
    }
    return highestUpVoteQuote
  }
  constructor() { }

  ngOnInit(): void {
  }

}
