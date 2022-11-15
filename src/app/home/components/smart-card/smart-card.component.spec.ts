import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { CardsService } from '../../../service/cards.service';
import {
  cardDoingMock,
  cardDoneMock,
  cardsServiceMock,
  cardToDoMock,
  cardToDoMockUpdated
} from '../../../shared/mocks/cards/mock';
import { of } from 'rxjs';

import { SmartCardComponent } from './smart-card.component';
import { toastrServiceMock } from '../../../shared/mocks/toastr/mocks';
import { ToastrService } from 'ngx-toastr';
import { DumbCardModule } from '../dumb-card/dumb-card.module';

describe('SmartCardComponent', () => {
  let component: SmartCardComponent;
  let fixture: ComponentFixture<SmartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, DumbCardModule],
      declarations: [SmartCardComponent],
      providers: [
        { provide: CardsService, useValue: cardsServiceMock },
        { provide: ToastrService, useValue: toastrServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SmartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should findAllCards', () => {
    const spy = jest.spyOn(component, 'findAllCards');
    component.findAllCards();
    expect(spy).toHaveBeenCalled();
  });

  it('should one card into cardsToDo', () => {
    component.findAllCards();
    expect(component.cardsToDoSmart.length).toEqual(1);
  });

  it('should one card into cardsDoing', () => {
    component.findAllCards();
    expect(component.cardsDoingSmart.length).toEqual(1);
  });

  it('should one card into cardsDone', () => {
    component.findAllCards();
    expect(component.cardsDoneSmart.length).toEqual(1);
  });

  it('should update card', () => {
    jest
      .spyOn(cardsServiceMock, 'findAll')
      .mockReturnValue(of([cardToDoMockUpdated, cardDoingMock, cardDoneMock]));

    component.updateCard(cardToDoMockUpdated);

    const cardUpdated = component.cardsToDoSmart.find(
      (card) => card.id === cardToDoMock.id
    );

    expect(cardUpdated).toEqual(cardToDoMockUpdated);
  });
});
