import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'aves-de-rapina',
    loadChildren: () => import('./filmes/aves-de-rapina/aves-de-rapina.module').then( m => m.AvesDeRapinaPageModule)
  },
  {
    path: 'vingadores-guerra-infinita',
    loadChildren: () => import('./filmes/vingadores-guerra-infinita/vingadores-guerra-infinita.module').then( m => m.VingadoresGuerraInfinitaPageModule)
  },
  {
    path: 'greys-anatomy',
    loadChildren: () => import('./series/greys-anatomy/greys-anatomy.module').then( m => m.GreysAnatomyPageModule)
  },
  {
    path: 'dark',
    loadChildren: () => import('./series/dark/dark.module').then( m => m.DarkPageModule)
  },
  {
    path: 'os-simpsons',
    loadChildren: () => import('./desenhos/os-simpsons/os-simpsons.module').then( m => m.OsSimpsonsPageModule)
  },
  {
    path: 'os-padrinhos-magicos',
    loadChildren: () => import('./desenhos/os-padrinhos-magicos/os-padrinhos-magicos.module').then( m => m.OsPadrinhosMagicosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
