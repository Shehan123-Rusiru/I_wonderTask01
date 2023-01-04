import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-new',
  template: `
  <app-child-new [chilMessage]="parentMessage"></app-child-new>
`,
  styleUrls: ['./parent-new.component.scss']
})
export class ParentNewComponent {
  parentMessage = 'Data Passing from parent String';
 
}
