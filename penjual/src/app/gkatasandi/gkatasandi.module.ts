import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GkatasandiPage } from './gkatasandi.page';

const routes: Routes = [
  {
    path: '',
    component: GkatasandiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GkatasandiPage]
})
export class GkatasandiPageModule {}
