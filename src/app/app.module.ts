import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChildComponent } from './appchild/appchild.component';
import { Appchild2Component } from './appchild2/appchild2.component';
import { Appchild3Component } from './appchild3/appchild.component';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    Appchild2Component,
    Appchild3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
