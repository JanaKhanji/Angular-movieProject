import { Movie } from "./movie";

  export class MovieDetail extends Movie {
    genres: Genre[];
    release_date: string;
    status: string;
  }

  class Genre {
      id: number;
      name: string;
  }