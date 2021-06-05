import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StyleComponent } from './style/style.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { SeriesDetailComponent } from './SeriesDetail.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'series', component: StyleComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'seriesdetail/:name', component: SeriesDetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
