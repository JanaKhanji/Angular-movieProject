import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
