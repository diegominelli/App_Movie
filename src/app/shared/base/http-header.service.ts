import { environment } from './../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

export class HttpHeaderUtil {
  public static createHeader(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json;charset=utf-8')
      .append('Authorization', `Bearer ${environment.token}`);
  }
}
