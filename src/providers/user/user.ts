import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UserProvider {
  user;
  booking;
  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  storeUser(val){
    this.user = val;
    console.log(val);
  }
  getUser(){
    return this.user;
  }
  storeBooking(val){
    this.booking = val;
  }
  getBooking(){
    return this.booking;
  }
}
