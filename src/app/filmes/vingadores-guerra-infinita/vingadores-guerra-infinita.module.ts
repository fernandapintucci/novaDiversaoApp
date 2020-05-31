import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VingadoresGuerraInfinitaPageRoutingModule } from './vingadores-guerra-infinita-routing.module';

import { VingadoresGuerraInfinitaPage } from './vingadores-guerra-infinita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VingadoresGuerraInfinitaPageRoutingModule
  ],
  declarations: [VingadoresGuerraInfinitaPage]
})
export class VingadoresGuerraInfinitaPageModule {}
