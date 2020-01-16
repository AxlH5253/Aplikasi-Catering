import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LaukkotakPage } from './laukkotak.page';

const routes: Routes = [
  {
    path: '',
    component: LaukkotakPage
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
  declarations: [LaukkotakPage]
})
export class LaukkotakPageModule {}
