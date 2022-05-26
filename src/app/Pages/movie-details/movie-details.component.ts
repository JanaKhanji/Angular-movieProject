import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../../Services/movies-api.service';
import { MovieDetail } from 'src/app/models/movie-detail';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  COLORS_OPTION = ['bg-primary', 'bg-secondary', 'bg-danger', 'bg-warning text-dark', 'bg-info text-dark', 'bg-light text-dark', 'bg-dark']
  
  loading = true;

  movieDetail: MovieDetail;

  constructor(
    private route: ActivatedRoute,
    private movieApiService: MoviesApiService
  ) { }

  ngOnInit(): void {
    const route =  this.route.snapshot.paramMap.get('movieId');
    this.movieApiService.getMovieDetails(route).subscribe((movie) => {
      console.log(movie);
      this.loading = false;
      this.movieDetail = movie
    })
  }

  getColor(index: number): string {
    return this.COLORS_OPTION[index];
  }
}
