import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpService: HttpService) { }

  createnotes(reqData: any) {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         'Authorization': this.token

      })
    }
    return this.httpService.postService('/createNote', reqData, true, header)
  }

  getallnotes(){
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
   return this.httpService.getService('/getAllNotes', true,header )
   }}