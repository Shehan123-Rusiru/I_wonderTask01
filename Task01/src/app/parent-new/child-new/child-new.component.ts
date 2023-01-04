import { Component, Input } from '@angular/core';
//import { ParentNewComponent } from 'src/app/ParentNew/parent-new/parent-new.component';

@Component({
  selector: 'app-child-new',
  template: `Say {{ chilMessage }}`,
  styleUrls: ['./child-new.component.scss']
})
export class ChildNewComponent {
  
  @Input() chilMessage : string;
  
  constructor() {

    this.chilMessage = '';
    
  }
}
