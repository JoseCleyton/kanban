import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../../../../model/card.model';
import { Steps } from '../../../../../shared/enums/step.enum';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent implements OnInit {
  @Input() card: Card | undefined;
  public steps = Steps;
  @Output() changeStepCardAfter = new EventEmitter<Card>();
  @Output() changeStepCardBefore = new EventEmitter<Card>();

  constructor() {}

  ngOnInit(): void {}

  public changeStepAfter(): void {
    this.changeStepCardAfter.emit(this.card);
  }

  public changeStepBefore(): void {
    this.changeStepCardBefore.emit(this.card);
  }
}
