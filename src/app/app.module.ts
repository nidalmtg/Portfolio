import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { SwiperModule } from 'swiper/angular';
import SwiperCore, {Pagination, Keyboard, Mousewheel} from "swiper";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeComponent } from './resume/resume.component';

// install Swiper modules
SwiperCore.use([Pagination, Keyboard, Mousewheel]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
