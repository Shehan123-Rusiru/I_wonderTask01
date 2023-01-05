import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

 public static bookTitle: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  @Input()
  ChildMessage!: string;

  constructor() { }

  ngOnInit(): void { }

 
  onAddBook() {
    ChildComponent.bookTitle = "What a click!";
    this.messageEvent.emit(ChildComponent.bookTitle);
    
  }
  sendmessage() {
    this.messageEvent.emit('Hello iam Child');
  }

  

}
