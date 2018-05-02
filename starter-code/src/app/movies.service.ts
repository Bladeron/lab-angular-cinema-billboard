import { Injectable } from '@angular/core';

interface Movie {
  id: Number,
  title: String,
  poster: String,
  synopsis: String,
  genres: Array<string>
  year: Number,
  director: String,
  actors: Array<string>,
  hours: Array<string>,
  room: Number

}

@Injectable()
export class MoviesService {

  movies: Array<Movie> = [];

  constructor() { }

  getMovies(){

  }
  
  getMovie(id){
  
  }
}


