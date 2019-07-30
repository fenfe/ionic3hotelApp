import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import * as firebase from 'firebase'
import { UserProvider } from '../../providers/user/user';
import { BookinghistoryPage } from '../bookinghistory/bookinghistory';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-paymodal',
  templateUrl: 'paymodal.html',
})
export class PaymodalPage {
  db = firebase.firestore();
  userpayment = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    cardnumber: '',
    cvv: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProv: UserProvider, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymodalPage');
    console.log('Paymodal data', this.userProv.getUser());
    
  }
  userPay(){
    let ref = this.db.collection('users').doc(this.userProv.getUser().uid).collection('bookings').doc(this.userProv.getUser().uid).set(this.userpayment , {merge: true});

    ref.then(res => {
      //this.navCtrl.push(BookinghistoryPage);
      this.presentToast();
      this.navCtrl.push(HomePage);
      
    }).catch(err => {
      console.log('|Error merging doc');
      
    })
  }

  
presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Thank you for booking with us. You will soon receive a confirmation email. ',
    duration: 5000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
  
}
