import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // baseUrl:string ='http://localhost:3000/';
  baseUrl:string ='https://skinpro-webapp-dev-demo.azurewebsites.net/';
  constructor(private http:HttpService) { }

  addFile(file:any):Observable<any>{
    let fd = new FormData();
    file.forEach((element:any) => {
      fd.append('file', element);
    });
    return this.http.httpPostRequest(`${this.baseUrl}file-upload`,fd)
  }
  getFiles():Observable<any>{
    return this.http.httpGetRequest(`${this.baseUrl}`)
  }
  getFileByName(name:any):Observable<any>{
    return this.http.httpGetRequest(`${this.baseUrl}images/${name}`)
  }
}
