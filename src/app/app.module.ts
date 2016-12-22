import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyA10WVSquXjrtbU6dTQXh3IGj-WN3APxCw",
    authDomain: "businesscontacts-c257d.firebaseapp.com",
    databaseURL: "https://businesscontacts-c257d.firebaseio.com",
    storageBucket: "businesscontacts-c257d.appspot.com"

};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
