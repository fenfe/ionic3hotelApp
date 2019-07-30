import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { UserProvider } from '../../providers/user/user';
import {MypopPage} from '../mypop/mypop';
import { PaymodalPage } from '../paymodal/paymodal';
import { ConfirmPage } from '../confirm/confirm';

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  db = firebase.firestore();
  booking = {
    uid: '',
    roomname: '',
    checkin: '',
    checkout: '',
    nodays: null,
    price: null,
    children: null,
    adults: null,
    rooms: null,
    meals: null
  }
  total;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, public popoverCtrl: PopoverController, public toastCtrl: ToastController) {
    this.booking.price = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('Book page Params: ',this.navParams);
    this.booking.roomname = this.navParams.data.roomname;
    this.booking.uid = this.userProvider.getUser().uid;//removed uid initially was getUser().uid
  }

  //POPOVER
  presentPopover() {
    const popover = this.popoverCtrl.create(MypopPage);
    popover.present();
  }

book(){


  let StartD = new Date(this.booking.checkin);
  let End = new Date(this.booking.checkout);

  let days = 1000 * 60 * 60 * 24;

  let diff = End.valueOf() - StartD.valueOf()

  this.booking.nodays = Math.floor(diff / days);

  this.total = this.booking.price * this.booking.nodays * this.booking.rooms*this.booking.meals;


  this.navCtrl.push(ConfirmPage,this.navParams);
  this.userProvider.storeBooking(this.booking);
  console.log('Booking data: ', this.booking);
}
}


// createBook(){
//   var price = this.navParams.data;
//   var total = price*(this.booking.children+this.booking.adults)
//   let book = this.createBooking.push();
//   book.set({
//     Total: total,
//     CheckIn: this.booking.checkin,
//     Checkout: this.booking.checkout,
//     Adults: this.booking.adults,
//     Children: this.booking.children
//   })
//   this.navCtrl.setRoot(DisplaybookingPage);
// }