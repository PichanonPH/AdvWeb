import { Component, OnInit } from '@angular/core';
import { flavoursModel } from 'src/app/flavour.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order!: flavoursModel
  
  constructor(private ORservice:OrderService) { 
    this.order = this.ORservice.getOrder()
  }

  ngOnInit(): void {
  }

  getSumPrice(){
    return this.ORservice.total;
  }

}
