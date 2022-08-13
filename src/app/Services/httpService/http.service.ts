import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseurl=environment.baseUrl;

  constructor(private httpclient: HttpClient) { }

  postService(url: string, reqData: any, token: boolean = false, httpOptions: any={}) {
    return this.httpclient.post(this.baseurl + url, reqData, token && httpOptions)
  }

  getService(url: string, token: boolean = false, httpOptions: any={}) {
    return this.httpclient.get(this.baseurl + url, token && httpOptions)
  }
  
  deleteService(url: string,token: boolean = true, httpOptions: any={}) {
    return this.httpclient.delete(this.baseurl + url, token && httpOptions)
  }

  putService(url: string, reqdata: any, token: boolean = true, httpOptions: any) {
    return this.httpclient.put(this.baseurl + url, reqdata, token && httpOptions)
  }
}
