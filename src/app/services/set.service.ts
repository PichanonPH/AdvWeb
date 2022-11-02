import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SetService {

  constructor(private http: HttpClient) { }

  sets: any

  addSet(setData:any){
    return this.http.post<any>('http://localhost:3000/set/add', setData)
      .pipe(map(data => {
        return data;
      }));
  }

  getSets(){
    return this.http.get<any>('http://localhost:3000/set/get')
      .pipe(map(data => {
        if(data){
          this.sets = data;
        }
        return this.sets;
      }));
  }
}
