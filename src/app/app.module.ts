import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {RegistermodalPage} from '../pages/registermodal/registermodal';
import {LoginmodalPage} from '../pages/loginmodal/loginmodal';
import {RoomsPage} from '../pages/rooms/rooms';
import {ResturantPage} from '../pages/resturant/resturant';
import { HomePage} from '../pages/home/home';
import { ConfirmPage } from '../pages/confirm/confirm';
import { IvoryDeluxePage} from '../pages/ivory-deluxe/ivory-deluxe';
import { MypopPage} from '../pages/mypop/mypop';
import {ProfilePage} from '../pages/profile/profile';
import {BookinghistoryPage} from '../pages/bookinghistory/bookinghistory';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { BookPage } from '../pages/book/book';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { PaymodalPage} from '../pages/paymodal/paymodal';
import { Camera } from '@ionic-native/camera';
import {SeedoPage} from '../pages/seedo/seedo';
import {PlayPage} from '../pages/play/play';
import {SpaPage} from '../pages/spa/spa';
import {OtherServicesPage} from '../pages/other-services/other-services'
import {EatPage} from '../pages/eat/eat';

@NgModule({
  declarations: [
    MyApp,
   OnboardingPage,
    RegistermodalPage,
    LoginmodalPage,
    RoomsPage,
    ResturantPage,
    IvoryDeluxePage,
    BookPage,
    HomePage,
    ConfirmPage,
    MypopPage,
    ProfilePage,
    BookinghistoryPage,
    PaymodalPage,
    SeedoPage,
    SpaPage,
    PlayPage,
    OtherServicesPage,
    EatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
 
    OnboardingPage,
    RegistermodalPage,
    LoginmodalPage,
    RoomsPage,
    ResturantPage,
    BookPage,
    IvoryDeluxePage,
    HomePage,
    ConfirmPage,
    MypopPage,
    ProfilePage,
    BookinghistoryPage,
    PaymodalPage,
    SeedoPage,
    SpaPage,
    PlayPage,
    OtherServicesPage,
    EatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    Camera
  ]
})
export class AppModule {}
