import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IvoryDeluxePage } from './ivory-deluxe';

@NgModule({
  declarations: [
    IvoryDeluxePage,
  ],
  imports: [
    IonicPageModule.forChild(IvoryDeluxePage),
  ],
})
export class IvoryDeluxePageModule {}
