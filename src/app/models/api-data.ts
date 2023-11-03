import { Movie } from "./movie";

export class ApiData {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
  }