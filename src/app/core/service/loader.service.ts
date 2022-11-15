import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private spinner$ = new BehaviorSubject<string>('');
  constructor() {}

  requestStarted() {
    this.spinner$.next('start');
  }

  requestEnded() {
    this.spinner$.next('stop');
  }

  getSpinnerObserver(): Observable<string> {
    return this.spinner$.asObservable();
  }
}
