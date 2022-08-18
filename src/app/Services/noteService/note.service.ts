import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  createnotes(reqData: any) {
    // this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token

      })
    }
    return this.httpService.postService('/createNote', reqData, true, header)
  }

  getallnotes() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService('/getAllNotes', true, header)
  }

  updatenotes(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService('/updateNotebyid', data, true, header)
  }

  
  archivenotes(id: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      }),
      body: { id: id }
    }
    return this.httpService.postService('/archivenote', {id}, true, header)
  }

  unarchivenotes(id: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      }),
      body: { id: id }
    }
    return this.httpService.postService('/unarchivenote', {id}, true, header)
  }

  getarchivenoteslist() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService('/getallarchivednotes', true, header)
  }

  trashnotes(id: any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService('/trashNoteById',{id},true,header)

   }

   restorenotes(id: any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService('/restoreNoteById',{id},true,header)

   }
   gettrashednoteslist() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService('/getAllTrashedNotes', true, header)
  }


  permanentDelete(id: any) {
    //console.log(id)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      }),
      body: { id: id }
    }
    return this.httpService.deleteService("/deleteNoteById", true, header)
  }

  

  
  ColorNote(data:any){
   
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService("/colournote",data,true, header);
  }




}