import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { flavoursModel } from '../flavour.model';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  flavourOrder: flavoursModel = [];

  constructor(private ORservice: OrderService) { }

  getPayment(){
    this.ORservice.getOrder()
  }
}
