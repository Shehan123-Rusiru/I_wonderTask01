import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ParentComponent } from './parent/parent.component';
import { ParentNewModule } from './parent-new/parent-new.module';
import { ChildNewComponent } from './parent-new/child-new/child-new.component';

@NgModule({
  declarations: [
    AppComponent,
    //ParentComponent,
   // ParentNewComponent,
    ChildNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentNewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
