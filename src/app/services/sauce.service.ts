import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SauceService {

  constructor(private http: HttpClient) { }

  sauces: any

  addSauce(sauceData:any){
    return this.http.post<any>('http://localhost:3000/sauce/add', sauceData)
      .pipe(map(data => {
        return data;
      }));
  }

  getSauces(){
    return this.http.get<any>('http://localhost:3000/sauce/get')
      .pipe(map(data => {
        if(data){
          this.sauces = data;
        }
        return this.sauces;
      }));
  }
}
