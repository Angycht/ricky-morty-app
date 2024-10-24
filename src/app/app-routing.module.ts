import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, { path: 'character-list', loadChildren: () => import('./components/characters/character-list/character-list.module').then(m => m.CharacterListModule) }, { path: 'character-details', loadChildren: () => import('./components/characters/character-details/character-details.module').then(m => m.CharacterDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
