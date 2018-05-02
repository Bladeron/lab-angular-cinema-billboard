import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {
  
  newMovies: Array<Object> = [];

  constructor(private movies: MoviesService) { }

  ngOnInit() {
    this.newMovies = this.movies.getMovies();
  }

}
