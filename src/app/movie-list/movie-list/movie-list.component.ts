import { MovieService } from '../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.listMovies('list/1').subscribe((response) => {
      console.log(response);
    });
  }
}
