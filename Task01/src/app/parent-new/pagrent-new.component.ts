import { Component } from '@angular/core';

@Component({
  selector: 'app-pagrent-new',
  template: `
  <app-child-new [chilMessage]="parentMessage"></app-child-new>
`,
  styleUrls: ['./pagrent-new.component.scss']
})
export class PagrentNewComponent {
  parentMessage = 'Data Passing from parent String';
 
}
