import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacteristicsPage } from './characteristics.page';

const routes: Routes = [
  {
    path: '',
    component: CharacteristicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class CharacteristicsPageRoutingModule {}
