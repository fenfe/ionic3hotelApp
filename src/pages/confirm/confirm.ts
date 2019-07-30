import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import {PaymodalPage} from '../paymodal/paymodal';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  booking ={
    uid: '',
    roomname: ''
  }
  bookingData = {

  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');

      console.log('Book Page Booking data: ', this.userProvider.getBooking()); // <=
      this.bookingData = this.userProvider.getBooking();
      this.booking.roomname = this.navParams.data.roomname;
      this.booking.uid = this.userProvider.getUser().uid;//removed uid initially was getUser().uid
      
  }

  gopay(){
    this.navCtrl.push(PaymodalPage, this.navParams);
    //console.log('Booking data: ', this.booking);
    
    
  }

}
