import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ParentNewComponent } from './parent-new/parent-new.component';
import { ChildNewComponent } from './ParentNew/child-new/child-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ParentNewComponent,
    ChildNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
