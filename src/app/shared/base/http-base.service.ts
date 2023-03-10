import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaderUtil } from './http-header.service';

@Injectable({
  providedIn: 'root',
})
export class HttpBaseService {
  public readonly httpClient: HttpClient;

  constructor(protected readonly injector: Injector) {
    if (injector == null || injector == undefined) {
      throw new Error('Injector não pode ser nulo');
    }

    this.httpClient = injector.get(HttpClient);
  }

  public httpGet(endpoint: string): Observable<any> {
    const request = this.httpClient.get(`${environment.apiBase}${endpoint}`, {
      headers: HttpHeaderUtil.createHeader(),
    });
    return request;
  }
}
