import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  @Input()
  ChildMessage!: string;

  constructor() { }

  ngOnInit(): void { }

  sendmessage() {
    this.messageEvent.emit('Hello iam Child');
  }

}
