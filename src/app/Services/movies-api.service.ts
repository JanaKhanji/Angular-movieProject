import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiData } from '../models/api-data';
import { MovieDetail } from '../models/movie-detail';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  Base_Url = `https://api.themoviedb.org/3`;

  /*
  for movies :: path = "search/movie" 
  for genre :: path =  "genre/movie/list"
  for trending :: path = "trending/movie/day"
  for credits :: path = "movie/{movie_id}/credits"
  https://api.themoviedb.org/3/discover/movie?apikey...&page=1&with_genres=14
  */

  constructor(private httpClient: HttpClient) { }

  constructUrl(path: string, query: string, page:number = null): string {
    return `${this.Base_Url}/${path}?api_key=${'8ecbae22bb483f43148462b2d5d3b6f0'}&query=${query}${page? `&page=${page}`: ''}`;
  };

  getTrendingMovies(page: number): Observable<ApiData> {
    return this.httpClient.get<ApiData>(this.constructUrl("trending/movie/day", "", page));
  }

  searchMovies(query: string, page: number): Observable<ApiData> {
    return this.httpClient.get<ApiData>(this.constructUrl("search/movie", query, page));
  }

  getMovieDetails(movieId: string): Observable<MovieDetail> {
    return this.httpClient.get<MovieDetail>(this.constructUrl(`/movie/${movieId}`, ''));
  }
}
