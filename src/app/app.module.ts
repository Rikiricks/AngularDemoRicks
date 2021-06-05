import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleComponent } from './style/style.component';
import { FormsModule } from '@angular/forms';

import {PipeTitle} from './pipeTitle.pipe';
import { SeriesCountComponent } from './series-count/series-count.component';
import { HttpClientModule } from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './pageNotFound.component';
import { SeriesDetailComponent } from './SeriesDetail.component';
import { SeasonService } from './season.service';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    PipeTitle,
    SeriesCountComponent,
    HomeComponent,
    PageNotFoundComponent,
    SeriesDetailComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SeasonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
