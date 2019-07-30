import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MypopPage } from './mypop';

@NgModule({
  declarations: [
    MypopPage,
  ],
  imports: [
    IonicPageModule.forChild(MypopPage),
  ],
})
export class MypopPageModule {}
