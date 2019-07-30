import { Component  } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { RoomsPage} from '../rooms/rooms';
import {ResturantPage} from '../resturant/resturant';
import { MypopPage } from '../mypop/mypop';
import {ProfilePage } from '../profile/profile';
import { BookinghistoryPage } from '../bookinghistory/bookinghistory';
import { RegistermodalPage } from '../registermodal/registermodal';
import {SeedoPage} from '../seedo/seedo';
import {PlayPage} from '../play/play';
import {SpaPage} from '../spa/spa';
import {OtherServicesPage} from '../other-services/other-services';
import {EatPage} from '../eat/eat';

import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  db = firebase.firestore();
  hotel = [];

  slides: any = [
      "../../assets/imgs/hotel-front.jpg",
       "../../assets/imgs/hotel-front.jpg",
       "../../assets/imgs/hotel-front.jpg",
       "../../assets/imgs/hotel-front.jpg",
       "../../assets/imgs/hotel-front.jpg",
       "../../assets/imgs/hotel-front.jpg",
       "../../assets/imgs/hotel-front.jpg"
  ]


  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
    this.getHotel()
  }
  ionViewDidLoad(){

  }
//my popover method
presentPopover() {
  const popover = this.popoverCtrl.create(MypopPage);
  popover.present();
}

  getHotel(){
    this.db.collection('hotels').get().then(res => {
      res.forEach(doc => {
        this.hotel.push(doc.data());
      });
      console.log('Done');
      //  this.navCtrl.push(RoomsPage, this.hotel);
    }).catch( err => {
      console.log(err);
    })
  }
gonext(){
  this.navCtrl.push(RoomsPage, this.hotel);
}
gosee(){
  this.navCtrl.push(SeedoPage);
}

goother(){
  this.navCtrl.push(OtherServicesPage);
}

gospa(){
  this.navCtrl.push(SpaPage);
}

goplay(){
  this.navCtrl.push(PlayPage);
}

goeat(){
  this.navCtrl.push(EatPage);
}

//resturant
gonext2(){
  this.navCtrl.push(ResturantPage);
}
 //spa
gonext3(){
  this.navCtrl.push(ResturantPage);
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
