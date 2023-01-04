import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ParentComponent } from './parent/parent.component';
import { PagrentNewComponent } from './parent-new/pagrent-new.component';
import { ChildNewComponent } from './parent-new/child-new/child-new.component';
import { ParentNewComponent } from './ParentNew/parent-new/parent-new.component';

@NgModule({
  declarations: [
    AppComponent,
   // ParentComponent,
   PagrentNewComponent,
    ChildNewComponent,
    ParentNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
