import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCusPage } from './create-cus.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCusPageRoutingModule {}
