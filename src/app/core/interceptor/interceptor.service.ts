import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../service/loader.service';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private loaderService: LoaderService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.requestStarted();

    const token = sessionStorage.getItem('token');

    let addHeaders = req.clone({
      headers: req.headers
        .set('Accept', `application/json`)
        .set('Content-Type', 'application/json')
    });
    if (token) {
      addHeaders = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(addHeaders).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigateByUrl('/');
        }

        return throwError(error.message);
      }),
      finalize(() => {
        this.loaderService.requestEnded();
      })
    );
  }
}
