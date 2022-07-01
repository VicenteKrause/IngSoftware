import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Screen/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CalendarioComponent } from './Screen/calendario/calendario.component';
import { CalendarComponent } from './Components/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CalendarioComponent,
    CalendarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
