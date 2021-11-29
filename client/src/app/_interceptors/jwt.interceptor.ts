import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CacheService } from '../_services/cache.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private cache: CacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let curToken = this.cache.StorageGet('token');

    if (curToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${curToken}`
        }
      })
    }

    return next.handle(request);
  }
}
