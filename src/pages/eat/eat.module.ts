import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EatPage } from './eat';

@NgModule({
  declarations: [
    EatPage,
  ],
  imports: [
    IonicPageModule.forChild(EatPage),
  ],
})
export class EatPageModule {}
