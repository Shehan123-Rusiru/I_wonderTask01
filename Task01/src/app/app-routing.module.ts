import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildNewComponent } from './parent-new/child-new/child-new.component';
import { ParentNewComponent } from './ParentNew/parent-new/parent-new.component';
//import { ParentNewModule } from './parent-new/parent-new.module';

const routes: Routes = [
  { path: 'Parent-component', component: ParentNewComponent },
  { path: 'Child-component', component: ChildNewComponent },
  { path: '', redirectTo: 'Child-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
