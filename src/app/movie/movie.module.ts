import { MovieRouting } from './movie.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [MovieListComponent],
  imports: [CommonModule, MovieRouting],
})
export class MovieModule {}
