import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from 'src/app/Services/movies-api.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-home-page',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  currentPage = 1;

  maximumPageNumber: number;

  searchText: string;

  loading = true;

  constructor(
    private movieApiService: MoviesApiService,
  ) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  handleSearchMovies(text: string) {
    this.searchText = text;
    this.currentPage = 1;
    if (this.searchText) {
      this.searchMovies();
    } else {
      this.loadMovies();
    }
  }

  searchMovies(): void {
    this.loading = true;
    this.movieApiService.searchMovies(this.searchText, this.currentPage).subscribe((data) => {
      this.movies = data.results;
      this.currentPage = data.page;
      this.maximumPageNumber = data.total_pages;
      this.loading = false;
    })
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
    if (this.searchText) {
      this.searchMovies();
    } else {
      this.loadMovies();
    }
  }
}
