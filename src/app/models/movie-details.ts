import { Movie } from "./movie";

  export class MovieDetail extends Movie {
    genres: Genre[];
    status: string;
  }

  class Genre {
      id: number;
      name: string;
  }