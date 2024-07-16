import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
//import { HomePageComponent } from './home-page/home-page.component';
//import { RadioButtonsModule } from './radio-buttons/radio-buttons.module';
//import { Sibling1Component } from './sibling1/sibling1.component';
//import { Sibling2Component } from './sibling2/sibling2.component';

@NgModule({
  declarations: [
    AppComponent
    //RadioButtonsComponent,
    //RadioButtonsModule
    //HomePageComponent
    //Sibling1Component,
    //Sibling2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
