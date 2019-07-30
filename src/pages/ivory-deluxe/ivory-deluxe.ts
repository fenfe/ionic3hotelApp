import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , PopoverController} from 'ionic-angular';
import { BookPage } from '../book/book';
import { RoomsPage } from '../rooms/rooms';
import { MypopPage} from '../mypop/mypop'

/**
 * Generated class for the IvoryDeluxePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ivory-deluxe',
  templateUrl: 'ivory-deluxe.html',
})
export class IvoryDeluxePage {
  slides = ["../../assets/imgs/hotel-front.jpg", "../../assets/imgs/hotel-front3.jpg", "../../assets/imgs/bsuite2.jpg", "../../assets/imgs/bathroom4.jpg"];
  room;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
   console.log('Ivory Params received', this.navParams);
   this.room = this.navParams.data.roomname
  }
  bookRoom(){
    this.navCtrl.push(BookPage,this.navParams);
  }
  cancel(){
    this.navCtrl.push(RoomsPage);
  }
// popover
presentPopover() {
  const popover = this.popoverCtrl.create(MypopPage);
  popover.present();
}
}
