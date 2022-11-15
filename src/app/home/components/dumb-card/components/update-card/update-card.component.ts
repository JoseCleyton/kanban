import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Card } from '../../../../../model/card.model';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.scss']
})
export class UpdateCardComponent implements OnInit {
  public formUpdateCard = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  });
  @Output() updateSelectedCard = new EventEmitter<Card>();
  @Input() selectedCard: Card | undefined;

  constructor() {}

  ngOnInit(): void {
    this.setValueIntoForm();
  }

  public deSelect(): void {
    this.selectedCard = undefined;
    this.updateSelectedCard.emit(this.selectedCard);
    this.formUpdateCard.reset();
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

  public updateCard(): void {
    this.selectedCard = {
      id: this.selectedCard?.id,
      titulo: String(this.formUpdateCard.get('title')?.value),
      conteudo: String(this.formUpdateCard.get('content')?.value),
      lista: String(this.selectedCard?.lista)
    };

    this.updateSelectedCard.emit(this.selectedCard);
    this.selectedCard = undefined;
  }
}
