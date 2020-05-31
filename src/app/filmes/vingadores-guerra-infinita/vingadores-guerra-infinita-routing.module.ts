import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VingadoresGuerraInfinitaPage } from './vingadores-guerra-infinita.page';

const routes: Routes = [
  {
    path: '',
    component: VingadoresGuerraInfinitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VingadoresGuerraInfinitaPageRoutingModule {}
