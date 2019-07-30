import {
Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams, PopoverController
} from 'ionic-angular';
import {
  IvoryDeluxePage
} from '../ivory-deluxe/ivory-deluxe';
import * as firebase from 'firebase';
import {MypopPage} from '../mypop/mypop';

@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage {
  db = firebase.firestore();
  rooms = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomsPage');
    this.getRooms();
    console.log(this.navParams);

  }
  getRooms() {
    this.db.collection('hotels').doc('hotel').collection('rooms').get().then(res => {
      res.forEach(doc => {
        this.rooms.push(doc.data());
      })
    });
  }
  viewRoom(value) {
    this.navCtrl.push(IvoryDeluxePage, value)
  }
  //popover
  presentPopover() {
    const popover = this.popoverCtrl.create(MypopPage);
    popover.present();
  }

}
