import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogininfoService } from './logininfo.service';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { 
  	path: 'beranda/:jenis', loadChildren: './beranda/beranda.module#BerandaPageModule',
  	canActivate: [LogininfoService]
  },
  { path: 'makanan/:id', loadChildren: './makanan/makanan.module#MakananPageModule',
    canActivate: [LogininfoService]
   },
  { path: 'jenis-makanan', loadChildren: './jenis-makanan/jenis-makanan.module#JenisMakananPageModule',
  canActivate: [LogininfoService] },
  { path: 'laukkotak/:data', loadChildren: './laukkotak/laukkotak.module#LaukkotakPageModule',
  canActivate: [LogininfoService] },
  { path: 'petapemesan', loadChildren: './petapemesan/petapemesan.module#PetapemesanPageModule',
  canActivate: [LogininfoService] },
  { path: 'konfirmasipesanan', loadChildren: './konfirmasipesanan/konfirmasipesanan.module#KonfirmasipesananPageModule',
  canActivate: [LogininfoService] },
  { path: 'profiluser', loadChildren: './profiluser/profiluser.module#ProfiluserPageModule',
  canActivate: [LogininfoService] },
  { path: 'pilihwaktu', loadChildren: './pilihwaktu/pilihwaktu.module#PilihwaktuPageModule', 
  canActivate: [LogininfoService] },
  { path: 'gpass', loadChildren: './gpass/gpass.module#GpassPageModule', 
  canActivate: [LogininfoService] },
  { path: 'dpesanan', loadChildren: './dpesanan/dpesanan.module#DpesananPageModule', 
  canActivate: [LogininfoService] },
  { path: 'laukkatering/:data', loadChildren: './laukkatering/laukkatering.module#LaukkateringPageModule', 
  canActivate: [LogininfoService] },
  { path: 'detailpesananpenjual/:id', loadChildren: './detailpesananpenjual/detailpesananpenjual.module#DetailpesananpenjualPageModule', 
  canActivate: [LogininfoService] },
  { path: 'tampilpetapesan/:id', loadChildren: './tampilpetapesan/tampilpetapesan.module#TampilpetapesanPageModule', 
  canActivate: [LogininfoService] },
  { path: 'rate/:id', loadChildren: './rate/rate.module#RatePageModule', 
  canActivate: [LogininfoService] },
  { path: '', loadChildren: './main-page/main-page.module#MainPagePageModule' },
  { path: 'home-penjual', loadChildren: './home-penjual/home-penjual.module#HomePenjualPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [LogininfoService] },
  { path: 'beranda-penyedia', loadChildren: './beranda-penyedia/beranda-penyedia.module#BerandaPenyediaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
