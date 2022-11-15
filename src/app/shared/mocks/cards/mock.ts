import { Card } from '../../../model/card.model';
import { Steps } from '../../../shared/enums/step.enum';
import { of } from 'rxjs';

export const cardToDoMockUpdated: Card = {
  id: '1',
  titulo: 'Test Update',
  lista: Steps.TO_DO,
  conteudo: 'Test Updates'
};

export const cardToDoMock: Card = {
  id: '1',
  titulo: 'Test',
  lista: Steps.TO_DO,
  conteudo: 'Test'
};
export const cardDoingMock: Card = {
  id: '1',
  titulo: 'Test',
  lista: Steps.DOING,
  conteudo: 'Test'
};
export const cardDoneMock: Card = {
  id: '1',
  titulo: 'Test',
  lista: Steps.DONE,
  conteudo: 'Test'
};

export const cardsMock: Card[] = [cardToDoMock, cardDoingMock, cardDoneMock];

//   public createNewcard(card: Card): Observable<Card> {
//     return this.http.post<Card>(`${this.URL}cards`, card);
//   }

//   public updateCard(updatedCard: Card): Observable<Card> {
//     return this.http.put<Card>(
//       `${this.URL}cards/${updatedCard.id}`,
//       updatedCard
//     );
//   }

//   public deleteCard(id: string): Observable<Card[]> {
//     return this.http.delete<Card[]>(`${this.URL}cards/${id}`);
//   }

export const cardsServiceMock = {
  findAll: jest.fn(() => of(cardsMock)),
  updateCard: jest.fn(() => of(cardToDoMockUpdated))
};
