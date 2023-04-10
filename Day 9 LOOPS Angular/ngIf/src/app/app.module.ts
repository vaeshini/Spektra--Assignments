import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessComponent } from './assess/assess.component';

@NgModule({
  declarations: [
    AppComponent,
    AssessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AssessComponent]
})
export class AppModule { }
