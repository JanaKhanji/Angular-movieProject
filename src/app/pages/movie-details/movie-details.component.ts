import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/models/movie-details';
import { MoviesApiService } from 'src/app/services/movies-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movieDetail: MovieDetail;
  loading = true;
  error = false;
  constructor(
    private moviesApiService: MoviesApiService,
    private activatedRoute: ActivatedRoute,
  ) {
    const movieId = activatedRoute.snapshot.paramMap.get('movieId');
    this.moviesApiService.getMovieDetails(movieId).subscribe({
     next: (data) => {
      this.movieDetail = data;
      this.loading = false;
  }, error:() => {
    this.error = true;
  }})
  }
}
