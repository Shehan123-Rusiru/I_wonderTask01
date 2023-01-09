//import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { EmailValidator } from '@angular/forms';
//import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

 public static bookTitle: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  @Input() ChildMessage: string;

  @Input() count: number;

  @Output() countChanged: EventEmitter<number> = new EventEmitter();


  constructor() {

    this.count = 0;
    this.ChildMessage = "";
   }

  ngOnInit(): void { }

 
  onAddBook() {
    ChildComponent.bookTitle = "What a click!";
    this.messageEvent.emit(ChildComponent.bookTitle);
    
  }
  sendmessage() {
    this.messageEvent.emit('Hello i am Child');
  }

  increment(){
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }

  

}
