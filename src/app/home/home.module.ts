import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolbarModule } from '../core/components/toolbar/toolbar.module';
import { SmartCardModule } from './components/smart-card/smart-card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ToolbarModule, SmartCardModule],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
