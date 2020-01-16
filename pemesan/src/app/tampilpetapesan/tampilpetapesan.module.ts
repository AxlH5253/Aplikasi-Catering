import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TampilpetapesanPage } from './tampilpetapesan.page';

const routes: Routes = [
  {
    path: '',
    component: TampilpetapesanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TampilpetapesanPage]
})
export class TampilpetapesanPageModule {}
