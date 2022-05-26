import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './Pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
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
export class AppRoutingModule { }
