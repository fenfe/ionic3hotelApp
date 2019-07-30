import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { transportPerson } from '../../app/enviroment';
import { HomePage } from '../../pages/home/home';
import { Users } from '../../app/user.model';
import { LoginmodalPage } from '../loginmodal/loginmodal';
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-registermodal',
  templateUrl: 'registermodal.html',
})
export class RegistermodalPage {
  bucket = [];
  ref = firebase.database().ref('hotelApp/');

  email: string = "";
  password: string = "";
  //create table that will create and store new members
  user = {} as Users;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private userProv: UserProvider) {
    this.ref.on('value', address => {
      this.bucket = transportPerson(address);
    })
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad RegistermodalPage');
    firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.userProv.storeUser(user);
      this.navCtrl.push(HomePage);
      }
    })
  }

  //method to register the user in the database
  registerUser(user: Users) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(() => {
      console.log("Account created succesfully! Welcome to the family")
    }).catch(function (error) {
      console.log(error);
    });
    this.navCtrl.push(HomePage);

  }

next(){
  this.navCtrl.push(LoginmodalPage);
}
facelogin(){
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  
    // The signed-in user info.
   this.navCtrl.setRoot(HomePage);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }


  AddName(name) {
    let Name = this.ref.push();
    Name.set(name);
  }

  delete(key) {
    firebase.database().ref('Batho/' + key).remove();
  }

  edit(key) {

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
            firebase.database().ref('Batho/' + key).update({ name: data.Name });
          }
        }
      ]
    });
    prompt.present();
  }

}
