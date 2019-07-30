import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController,AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { transportPerson } from '../../app/enviroment';
import {HomePage} from '../home/home';
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-loginmodal',
  templateUrl: 'loginmodal.html',
})
export class LoginmodalPage {

  email: string = "";
  password: string = "";
  error: string;
  bucket = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
       public viewCtrl: ViewController,
        public modalCtrl: ModalController,
        public alertCtrl: AlertController,
        private userProv: UserProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginmodalPage');
   this.loginuser()
  }
//authenticate user when login
// this.hotel.push(doc.data())
loginuser(){
  firebase.auth().onAuthStateChanged(user => {
    if (user){
      this.userProv.storeUser(user);
      this.navCtrl.push(HomePage);
    } else {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
        this.userProv.storeUser(user);
        this.navCtrl.push(HomePage);
      }).catch(err => {
        this.error = err.message
      });
      this.error = 'Signin.'
    }
  })
  
}

  //dismiss modal
  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

 /*  AddName(name){
    let Name = this.ref.push();
    Name.set(name);
  } */

  delete(key){
    firebase.database().ref('Batho/'+ key).remove();
  }

  edit(key){
    
    const prompt = this.alertCtrl.create({
      title: '',
      message: "Udate your details",
      inputs: [
        {
          name: 'name',
          placeholder: 'Enter your name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            firebase.database().ref('Batho/'+key).update({name:data.Name});
          }
        }
      ]
    });
    prompt.present();
  }

 

}
