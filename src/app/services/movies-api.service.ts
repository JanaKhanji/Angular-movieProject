import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiData } from '../models/api-data';
import { MovieDetail } from '../models/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  constructor(private httpClient: HttpClient) { }

  constructUrl(path: string, query: string, page:number = null): string {
    return `https://api.themoviedb.org/3/${path}?api_key=${'8ecbae22bb483f43148462b2d5d3b6f0'}&query=${query}${page? `&page=${page}`: ''}`;
  };


  getTrendingMovies(page: number): Observable<ApiData> {
    return this.httpClient.get<ApiData>(this.constructUrl("trending/movie/day", "", page));
  }

  getMovieDetails(movieId: string): Observable<MovieDetail> {
    return this.httpClient.get<MovieDetail>(this.constructUrl(`/movie/${movieId}`, ''));
  }
}
