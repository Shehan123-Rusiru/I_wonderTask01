import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagrentNewComponent } from './pagrent-new.component';
import { ChildNewComponent } from './child-new/child-new.component';



@NgModule({
  declarations: [
    PagrentNewComponent,
    ChildNewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ParentNewModule { }
