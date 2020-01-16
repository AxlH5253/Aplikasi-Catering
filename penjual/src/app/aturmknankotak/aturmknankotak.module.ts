import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AturmknankotakPage } from './aturmknankotak.page';

const routes: Routes = [
  {
    path: '',
    component: AturmknankotakPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AturmknankotakPage]
})
export class AturmknankotakPageModule {}
