import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public authenticate(login: string, password: string): Observable<any> {
    return this.http.post(`${this.URL}login`, { login, senha: password });
  }
}
