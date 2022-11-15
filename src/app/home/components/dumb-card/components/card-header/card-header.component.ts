import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../../../../model/card.model';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {
  @Input() card: Card | undefined;
  @Output() selectedCard = new EventEmitter<Card>();
  @Output() deleteSelectedCard = new EventEmitter<Card>();

  constructor() {}

  ngOnInit(): void {}

  public selectCard(): void {
    this.selectedCard.emit(this.card);
  }

  public deleteCard(): void {
    this.deleteSelectedCard.emit(this.card);
  }
}
