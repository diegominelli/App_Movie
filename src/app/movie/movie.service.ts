import { HttpBaseService } from './../shared/base/http-base.service';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class MovieService extends HttpBaseService {
  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  public listMovies(movie: string) {
    return this.httpGet(movie);
  }
}
