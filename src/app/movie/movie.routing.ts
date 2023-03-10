import { MovieListComponent } from './movie-list/movie-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const movieRouting: Routes = [
  {
    path: '',
    redirectTo: 'movie-list',
    pathMatch: 'full',
  },
  {
    path: 'movie-list',
    component: MovieListComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(movieRouting)],
})
export class MovieRouting {}
