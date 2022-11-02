import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SaleshistoryService {

  saleshistorys: any

  constructor(private http : HttpClient) { }

  addSaleshistory(saleshistoryData:any){
    return this.http.post<any>('http://localhost:3000/saleshistory/add', saleshistoryData)
      .pipe(map(data => {
        return data;
      }));
  }

  getSaleshistoryrs(){
    return this.http.get<any>('http://localhost:3000/saleshistory/get')
      .pipe(map(data => {
        if(data){
          this.saleshistorys = data;
        }
        return this.saleshistorys;
      }));
  }
}
