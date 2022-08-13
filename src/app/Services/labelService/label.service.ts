import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
   }


  createlabel(reqData: any) {
    
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token

      })
    }
    return this.httpService.postService('/createLabel', reqData, true, header)
  }

  getallLabels() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService('/getAllLabel', true, header)
  }

  updateLabel(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService('/updateLabelById', data, true, header)
  }

  
  
  deleteLabel(id: any) {
    //console.log(id)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      }),
      body: { id: id }
    }
    return this.httpService.deleteService("/deleteLabelById", true, header)
  }



}
