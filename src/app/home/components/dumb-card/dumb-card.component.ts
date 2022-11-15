import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Card } from '@model/card.model';
import { FormGroup, FormControl } from '@angular/forms';

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

  public formUpdateCard = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });

  public selectedCard: Card | undefined;

  constructor() {}

  ngOnInit(): void {}

  public actionNewCard(): void {
    this.newCardEvent.emit(true);
  }

  public selectCard(card: Card): void {
    this.selectedCard = card;
    this.setValueIntoForm();
  }

  public updateCard(): void {
    this.selectedCard = {
      id: this.selectedCard?.id,
      titulo: String(this.formUpdateCard.get('title')?.value),
      conteudo: String(this.formUpdateCard.get('content')?.value),
      lista: String(this.selectedCard?.lista)
    };

    this.updateSelectedCard.emit(this.selectedCard);
  }

  private setValueIntoForm(): void {
    this.formUpdateCard
      .get('title')
      ?.setValue(this.selectedCard?.titulo ? this.selectedCard?.titulo : '');
    this.formUpdateCard
      .get('content')
      ?.setValue(
        this.selectedCard?.conteudo ? this.selectedCard?.conteudo : ''
      );
  }

  public deSelect(): void {
    this.selectedCard = undefined;
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
