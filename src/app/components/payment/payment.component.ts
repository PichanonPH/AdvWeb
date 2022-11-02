import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { flavoursModel } from 'src/app/flavour.model';
import { SaleshistoryService } from 'src/app/services/saleshistory.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  order!: flavoursModel

  flavourForm = new FormGroup({
    flavour_id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(private ORservice: OrderService,
    private SHservice: SaleshistoryService
    ) { 
    this.order = this.ORservice.getOrder()
  }

  ngOnInit(): void {
  }
  getSumPrice(){
    this.ORservice.total
  }
  addSalesHistory(){
    this.SHservice.addSaleshistory(this.order).subscribe({
      next: data => {
        alert('SalesHistory added succesfully');
        this.flavourForm.reset();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  
}
