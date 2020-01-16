import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TambahmakanankotakPage } from './tambahmakanankotak.page';

const routes: Routes = [
  {
    path: '',
    component: TambahmakanankotakPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TambahmakanankotakPage]
})
export class TambahmakanankotakPageModule {}
