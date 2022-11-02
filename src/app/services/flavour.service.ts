import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlavourService {

  flavours: any

  constructor(private http: HttpClient) { }

  

  addFlavour(flavourData:any){
    return this.http.post<any>('http://localhost:3000/flavour/add', flavourData)
      .pipe(map(data => {
        return data;
      }));
  }

  getFlavours(){
    return this.http.get<any>('http://localhost:3000/flavour/get')
      .pipe(map(data => {
        if(data){
          this.flavours = data;
        }
        return this.flavours;
      }));
  }

  getTheFlavour(id:number){
    return this.flavours[id]
  }

  getAllFlavour(){
    return this.flavours
  }
}
