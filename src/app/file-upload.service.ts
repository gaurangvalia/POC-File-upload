import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  baseUrl:string ='http://localhost:3000/';
  constructor(private http:HttpService) { }

  addFile(file:any):Observable<any>{
    let fd = new FormData();
    file.forEach((element:any) => {
      fd.append('files', element);
    });
    return this.http.httpPostRequest(`${this.baseUrl}upload`,fd)
  }
}
