import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
  },
  {
    path: 'movie/:movieId',
    component: MovieDetailsComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
