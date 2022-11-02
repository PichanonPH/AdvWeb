import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  constructor(private http: HttpClient) { }

  toppings: any

  addTopping(toppingData:any){
    return this.http.post<any>('http://localhost:3000/topping/add', toppingData)
      .pipe(map(data => {
        return data;
      }));
  }

  getToppings(){
    return this.http.get<any>('http://localhost:3000/topping/get')
      .pipe(map(data => {
        if(data){
          this.toppings = data;
        }
        return this.toppings;
      }));
  }
}
