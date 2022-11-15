import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  readonly URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.URL}cards`);
  }

  public createNewcard(card: Card): Observable<Card> {
    return this.http.post<Card>(`${this.URL}cards`, card);
  }

  public updateCard(updatedCard: Card): Observable<Card> {
    return this.http.put<Card>(
      `${this.URL}cards/${updatedCard.id}`,
      updatedCard
    );
  }

  public deleteCard(id: string): Observable<Card[]> {
    return this.http.delete<Card[]>(`${this.URL}cards/${id}`);
  }
}
