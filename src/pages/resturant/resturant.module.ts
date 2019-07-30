import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResturantPage } from './resturant';

@NgModule({
  declarations: [
    ResturantPage,
  ],
  imports: [
    IonicPageModule.forChild(ResturantPage),
  ],
})
export class ResturantPageModule {}
