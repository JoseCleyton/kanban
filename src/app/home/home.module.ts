import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { ToolbarModule } from '@core/components/toolbar/toolbar.module';
import { SmartCardComponent } from './components/smart-card/smart-card.component';
import { DumbCardComponent } from './components/dumb-card/dumb-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NewCardComponent } from './components/smart-card/components/new-card/new-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { DeleteCardComponent } from './components/smart-card/components/delete-card/delete-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    SmartCardComponent,
    DumbCardComponent,
    NewCardComponent,
    DeleteCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    ToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    FormsModule
  ]
})
export class HomeModule {}
