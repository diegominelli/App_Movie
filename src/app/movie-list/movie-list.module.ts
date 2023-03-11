import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './services/movie.service';


@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MovieListRoutingModule
  ],
  providers:[MovieService]
})
export class MovieListModule { }
