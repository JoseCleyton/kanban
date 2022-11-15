import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartCardComponent } from './smart-card.component';
import { DeleteCardComponent } from './components/delete-card/delete-card.component';
import { NewCardComponent } from './components/new-card/new-card.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DumbCardModule } from '../dumb-card/dumb-card.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SmartCardComponent, DeleteCardComponent, NewCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    DumbCardModule,
    MatButtonModule
  ],
  exports: [SmartCardComponent]
})
export class SmartCardModule {}
