import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('Snuggle with struggle.Its always rare to succeed in the first try','Will Sentanance','Siman', new Date(1988,12,12)),
    new Quotes('Often companies which refactor old companies with new production rule','Ryan kriggs','lloyd Mwangi', new Date(2020,6,21))
    
  ]
  // vote: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails
    // this.vote += this.vote;
    
  }
  deleteGoal(index){
    this.quotes.splice(index,1)
  }
  addNewGoal(quote){
  quote.creationDate = new Date()
  this.quotes.push(quote)
  console.log(this.quotes)
  }
}
