import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { RegistermodalPage } from '../registermodal/registermodal';
import { LoginmodalPage } from '../loginmodal/loginmodal';
import {HomePage} from '../home/home';
/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {
 @ViewChild('slides') slides:Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }
  onboardingSlides: any = [
    { image: '../../assets/imgs/5-stars.svg', title: 'Welcome', text: 'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque'},
    { image: '../../assets/imgs/bed.png', title: 'Select a  room ', text: 'with Luxurious airflow massage beds  sit amet consectetur adipisicing elit. Atque'},
    { image: '../../assets/imgs/shower.svg', title: 'Bath', text: 'Take a long relaxing bath in our italian masterpiece luxury baths  adipisicing elit. Atque'},
    { image: '../../assets/imgs/food.svg', title: 'food', text: 'Indulge your taste buds to wonderful mouth watering cuisines prepared by our top chefs '}
    
  ]

  //navigate slides to next slide
  next(){
    this.slides.slideNext();
  }

  //navigate user to login page
  login(){
    this.navCtrl.push(LoginmodalPage);
  }

  //create register modal
  registerModal() {
    let registerModal = this.modalCtrl.create(RegistermodalPage);
    registerModal.present();
  }
  
  gonext(){
    this.navCtrl.push(HomePage);
  }
  //create login modal
  loginModal() {
    let loginModal = this.modalCtrl.create(LoginmodalPage);
    loginModal.present();
  }
}
