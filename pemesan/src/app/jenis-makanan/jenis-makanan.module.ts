import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JenisMakananPage } from './jenis-makanan.page';

const routes: Routes = [
  {
    path: '',
    component: JenisMakananPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JenisMakananPage]
})
export class JenisMakananPageModule {}
