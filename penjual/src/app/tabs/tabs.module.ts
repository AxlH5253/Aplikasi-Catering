import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LogininfoService } from '../logininfo.service';
 
import { IonicModule } from '@ionic/angular';
 
import { TabsPage } from './tabs.page';
 
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
        { path: 'tab1', loadChildren: '../beranda/beranda.module#BerandaPageModule', canActivate: [LogininfoService]  },
        { path: 'tab2', loadChildren: '../makanan/makanan.module#MakananPageModule', canActivate: [LogininfoService]  },
        { path: 'tab3', loadChildren: '../profil/profil.module#ProfilPageModule' , canActivate: [LogininfoService] },
        { path: 'tab4/:id', loadChildren: '../detailpesanan/detailpesanan.module#DetailpesananPageModule', canActivate: [LogininfoService] },
        { path: 'tab5/:id', loadChildren: '../petapesanan/petapesanan.module#PetapesananPageModule', canActivate: [LogininfoService] },
        { path: 'tab6', loadChildren: '../tampilprofil/tampilprofil.module#TampilprofilPageModule', canActivate: [LogininfoService] },
        { path: 'tab7', loadChildren: '../gkatasandi/gkatasandi.module#GkatasandiPageModule', canActivate: [LogininfoService] },
        { path: 'tab8', loadChildren: '../gprofil/gprofil.module#GprofilPageModule', canActivate: [LogininfoService] },
        { path: 'tab9/:id', loadChildren: '../dpaket/dpaket.module#DpaketPageModule' },
        { path: 'tab10/:id', loadChildren: '../aturmknan/aturmknan.module#AturmknanPageModule' },
        { path: 'tab11/:id', loadChildren: '../updatepaket/updatepaket.module#UpdatepaketPageModule' },
        { path: 'tab12/:id', loadChildren: '../aturmknankotak/aturmknankotak.module#AturmknankotakPageModule' },
        { path: 'tab13/:data', loadChildren: '../tambahpaket/tambahpaket.module#TambahpaketPageModule' },
        { path: 'tab14/:id', loadChildren: '../updatemakanankotak/updatemakanankotak.module#UpdatemakanankotakPageModule' },
        { path: 'tab15/:id', loadChildren: '../updatemakananprasmanan/updatemakananprasmanan.module#UpdatemakananprasmananPageModule' },
        { path: 'tab16/:id', loadChildren: '../tambahmakanan/tambahmakanan.module#TambahmakananPageModule' },
        { path: 'tab17/:id', loadChildren: '../tambahmakanankotak/tambahmakanankotak.module#TambahmakanankotakPageModule' },
        { path: 'tab18', loadChildren: '../rate/rate.module#RatePageModule' },
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/tab1',
    pathMatch:'full'
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}