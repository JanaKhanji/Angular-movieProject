import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../../services/movies-api.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];

  currentPage = 1;

  maximumPageNumber: number;

  loading = true;

  constructor(
    private movieApiService: MoviesApiService,
  ) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.loading = true;
    this.movieApiService.getTrendingMovies(this.currentPage).subscribe((data) => {
      this.movies = data.results;
      this.currentPage = data.page;
      this.maximumPageNumber = data.total_pages;
      this.loading = false; 
    })
  }

  selectPage(page: number): void {
    this.currentPage = page;
    this.loadMovies();
  }
}