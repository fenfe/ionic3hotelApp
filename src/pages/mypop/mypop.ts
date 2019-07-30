import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { BookinghistoryPage } from '../bookinghistory/bookinghistory';
import * as firebase from 'firebase';
import { transportPerson } from '../../app/enviroment';
import { RegistermodalPage } from '../registermodal/registermodal';
/**
 * Generated class for the MypopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypop',
  templateUrl: 'mypop.html',
})
export class MypopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypopPage');
  }
  gohome(){
    this.navCtrl.push(HomePage);
  }

  profile(){
    this.navCtrl.push(ProfilePage);
  }
  viewhistory(){
    this.navCtrl.push(BookinghistoryPage);
  }

  //sign 0ut
  signOut() {
     firebase.auth().signOut().then(() => {
    console.log('Sign-out successful !');
    this.navCtrl.push(RegistermodalPage);
  }).catch((error) => {
    console.log(error)
  });
  }
}
