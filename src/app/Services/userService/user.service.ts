import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) { }

  registration(reqData:any){
    console.log(reqData);
    let header = {
    headers:new HttpHeaders({
      'Content-type' : 'application/json',

    })
  }
  return this.httpService.postService('/register',reqData,false,header)

  }

  login(reqData:any){
    console.log(reqData);
    let header = {
    headers:new HttpHeaders({
      'Content-type' : 'application/json',

    })
  }
  return this.httpService.postService('/login',reqData,true,header)

  }

  forgot(reqData:any){
    console.log(reqData);
    let header = {
    headers:new HttpHeaders({
      'Content-type' : 'application/json',

    })
  }
  return this.httpService.postService('/forgotPassword',reqData,true,header)

  }
  reset(reqData:any){
    console.log(reqData);
    let header = {
    headers:new HttpHeaders({
      'Content-type' : 'application/json',

    })
  }
  return this.httpService.postService('/resetPassword',reqData,true,header)

  }

  

  
}
