import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsPadrinhosMagicosPageRoutingModule } from './os-padrinhos-magicos-routing.module';

import { OsPadrinhosMagicosPage } from './os-padrinhos-magicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsPadrinhosMagicosPageRoutingModule
  ],
  declarations: [OsPadrinhosMagicosPage]
})
export class OsPadrinhosMagicosPageModule {}
