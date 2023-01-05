import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  bookTitle: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  @Input()
  ChildMessage!: string;

  constructor() { }

  ngOnInit(): void { }

 
  onAddBook() {
    console.log('What a click!');
  }
  sendmessage() {
    this.messageEvent.emit('Hello iam Child');
  }

  

}
