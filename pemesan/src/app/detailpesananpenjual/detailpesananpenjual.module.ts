import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailpesananpenjualPage } from './detailpesananpenjual.page';

const routes: Routes = [
  {
    path: '',
    component: DetailpesananpenjualPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailpesananpenjualPage]
})
export class DetailpesananpenjualPageModule {}
