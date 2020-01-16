import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MakananPage } from './makanan.page';

const routes: Routes = [
  {
    path: '',
    component: MakananPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MakananPage]
})
export class MakananPageModule {}
