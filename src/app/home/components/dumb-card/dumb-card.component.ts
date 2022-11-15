import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../../../model/card.model';

@Component({
  selector: 'app-dumb-card',
  templateUrl: './dumb-card.component.html',
  styleUrls: ['./dumb-card.component.scss']
})
export class DumbCardComponent implements OnInit {
  @Input() cardsToDo: Card[] = [];
  @Input() cardsDoing: Card[] = [];
  @Input() cardsDone: Card[] = [];

  @Output() newCardEvent = new EventEmitter<boolean>();
  @Output() updateSelectedCard = new EventEmitter<Card>();
  @Output() deleteSelectedCard = new EventEmitter<Card>();
  @Output() changeStepCardAfter = new EventEmitter<Card>();
  @Output() changeStepCardBefore = new EventEmitter<Card>();

  public selectedCard: Card | undefined;

  constructor() {}

  ngOnInit(): void {}

  public actionNewCard(): void {
    this.newCardEvent.emit(true);
  }

  public selectCard(card: Card): void {
    this.selectedCard = card;
  }

  public updateCard(card: Card): void {
    this.selectedCard = card;
    if (this.selectedCard) {
      this.updateSelectedCard.emit(this.selectedCard);
      this.selectedCard = undefined;
    }
  }

  public deleteCard(card: Card): void {
    this.deleteSelectedCard.emit(card);
  }

  public changeStepAfter(card: Card): void {
    this.changeStepCardAfter.emit(card);
  }

  public changeStepBefore(card: Card): void {
    this.changeStepCardBefore.emit(card);
  }
}
