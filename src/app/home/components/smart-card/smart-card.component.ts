import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CardsService } from '@app/service/cards.service';
import { Card } from '@model/card.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewCardComponent } from './components/new-card/new-card.component';
import { DeleteCardComponent } from './components/delete-card/delete-card.component';
import { Steps } from '@app/shared/enums/step.enum';

@Component({
  selector: 'app-smart-card',
  templateUrl: './smart-card.component.html',
  styleUrls: ['./smart-card.component.scss']
})
export class SmartCardComponent implements OnInit, OnDestroy {
  public cardsToDo: Card[] = [];
  public cardsDoing: Card[] = [];
  public cardsDone: Card[] = [];
  public subscription = new Subscription();

  constructor(private cardsService: CardsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.findAllCards();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public findAllCards(): void {
    this.subscription.add(
      this.cardsService.findAll().subscribe((data) => {
        this.filterByToDo(data);
        this.filterByDoing(data);
        this.filterByDone(data);
      })
    );
  }

  private filterByToDo(data: Card[]): void {
    this.cardsToDo = data.filter((card) => card.lista === Steps.TO_DO);
  }

  private filterByDoing(data: Card[]): void {
    this.cardsDoing = data.filter((card) => card.lista === Steps.DOING);
  }

  private filterByDone(data: Card[]): void {
    this.cardsDone = data.filter((card) => card.lista === Steps.DONE);
  }

  public openModalNewCard(): void {
    const dialogRefValue = this.dialog.open(NewCardComponent, {
      width: '370px'
    });

    dialogRefValue.afterClosed().subscribe((data) => {
      const newCard: Card = {
        titulo: data.get('title').value,
        conteudo: data.get('content').value,
        lista: 'todo'
      };

      this.subscription.add(
        this.cardsService.createNewcard(newCard).subscribe(() => {
          this.findAllCards();
        })
      );
    });
  }

  public updateCard(updatedCard: Card): void {
    this.subscription.add(
      this.cardsService
        .updateCard(updatedCard)
        .subscribe(() => this.findAllCards())
    );
  }

  public deleteCard(deleteCard: Card): void {
    const dialogRefValue = this.dialog.open(DeleteCardComponent, {
      width: '200px',
      data: deleteCard
    });
    this.subscription.add(
      dialogRefValue.afterClosed().subscribe((isDelete) => {
        if (isDelete) {
          this.subscription.add(
            this.cardsService
              .deleteCard(String(deleteCard.id))
              .subscribe(() => {
                this.findAllCards();
              })
          );
        }
      })
    );
  }

  public changeStepAfter(card: Card): void {
    card.lista = this.getStepAfter(card.lista);
    this.subscription.add(
      this.cardsService.updateCard(card).subscribe(() => this.findAllCards())
    );
  }

  public changeStepBefore(card: Card): void {
    card.lista = this.getStepBefore(card.lista);
    this.subscription.add(
      this.cardsService.updateCard(card).subscribe(() => this.findAllCards())
    );
  }

  private getStepAfter(step: string): string {
    const STEP = {
      todo: Steps.DOING,
      doing: Steps.DONE,
      default: step
    };
    return STEP[step as keyof typeof STEP] || STEP['default'];
  }

  private getStepBefore(step: string): string {
    const STEP = {
      doing: Steps.TO_DO,
      done: Steps.DOING,
      default: step
    };
    return STEP[step as keyof typeof STEP] || STEP['default'];
  }
}
