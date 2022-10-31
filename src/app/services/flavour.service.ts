import { Injectable } from '@angular/core';
import { flavoursModel } from '../flavour.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlavourService {

  flavour: flavoursModel = [
    { flavour_id: '100001', name: 'Intel Core i7 Gen 10th', price: 10, detail: 'The Intel Core i7-10750H',image:"s" }
  ];

  flavours: any

  constructor(private http: HttpClient) { }

  getAllFlavour(){
    return this.flavour
  }

  addProduct(flavourData:any){
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
}
