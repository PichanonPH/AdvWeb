import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private http: HttpClient) { }

  containers: any

  addContainer(containerData:any){
    return this.http.post<any>('http://localhost:3000/container/add', containerData)
      .pipe(map(data => {
        return data;
      }));
  }

  getContainers(){
    return this.http.get<any>('http://localhost:3000/container/get')
      .pipe(map(data => {
        if(data){
          this.containers = data;
        }
        return this.containers;
      }));
  }
}
