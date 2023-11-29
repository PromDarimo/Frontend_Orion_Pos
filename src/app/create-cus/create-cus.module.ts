import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCusPageRoutingModule } from './create-cus-routing.module';

import { CreateCusPage } from './create-cus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCusPageRoutingModule
  ],
  declarations: [CreateCusPage]
})
export class CreateCusPageModule {}
