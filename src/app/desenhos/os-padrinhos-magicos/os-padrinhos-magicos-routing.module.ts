import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsPadrinhosMagicosPage } from './os-padrinhos-magicos.page';

const routes: Routes = [
  {
    path: '',
    component: OsPadrinhosMagicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsPadrinhosMagicosPageRoutingModule {}
