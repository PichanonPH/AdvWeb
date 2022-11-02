import { Injectable } from '@angular/core';
import { flavoursModel } from '../flavour.model';
import { FlavourService } from './flavour.service';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  flavourOrder: flavoursModel = [];
  total: number = 0
  counter: number = 0;

  constructor(private FVservice:FlavourService) { }

  add(id:number){
    this.counter += 1;
    this.flavourOrder.push(this.FVservice.getTheFlavour(id))
    this.total += this.FVservice.getTheFlavour(id).price
  }

  getcounter(){
    return this.counter;
  }

  getOrder(){
    return this.flavourOrder
  }

}
