import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {

  }

  receivemessage(msg: any) {
    alert(msg);
  }
  receiveClickmessage(msgC: any) {
    alert(msgC);
  }

}
