import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PilihwaktuPage } from './pilihwaktu.page';

const routes: Routes = [
  {
    path: '',
    component: PilihwaktuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PilihwaktuPage]
})
export class PilihwaktuPageModule {}
