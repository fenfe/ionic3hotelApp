import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-bookinghistory',
  templateUrl: 'bookinghistory.html',
})
export class BookinghistoryPage {
  db = firebase.firestore();
  bookindData;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProv: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookinghistoryPage');
    console.log('User in Prov: ', this.userProv.getUser());
    
    this.fetchBooking()
  }
  getUser(){
    this.db.collection('users').doc(this.userProv.getUser().uid).set({uid: this.userProv.getUser().uid}).then(res => {
      let userRef = this.db.collection('users');
      let query = userRef.where('uid', '==', this.userProv.getUser().uid).get().then( snapShot => {
        snapShot.forEach(doc => {
          console.log(doc.data());
        })
      })
    })
  }
  fetchBooking(){
    let bookingRef = this.db.collection('users').doc(this.userProv.getUser().uid).collection('bookings').get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log('Booking doc: ', doc.data());
        this.bookindData = doc.data();
        
      })
    })
  }

}
