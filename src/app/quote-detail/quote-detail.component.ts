import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote :Quotes;
  @Output() delete = new EventEmitter()
  vote = 0;
  down =0;

  constructor() { }

  ngOnInit(): void {
  }
  addUps(){
    this.vote = this.vote+ 1
  }
  addDowns(){
    this.down = this.down +1
  }
  quoteDelete(){
    this.delete.emit()
  }
}
