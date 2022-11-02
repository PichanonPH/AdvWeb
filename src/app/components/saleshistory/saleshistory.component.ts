import { Component, OnInit } from '@angular/core';
import { FlavourService } from 'src/app/services/flavour.service';
import { SaleshistoryService } from 'src/app/services/saleshistory.service';
import { flavoursModel } from 'src/app/flavour.model';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-saleshistory',
  templateUrl: './saleshistory.component.html',
  styleUrls: ['./saleshistory.component.css']
})
export class SaleshistoryComponent implements OnInit {

  flavour_order!: flavoursModel
  saleshistorys: any

  constructor(private ORservice: OrderService,
    private SHservice: SaleshistoryService
    ) { this.SalesHistory_onLoading();
    
  }

  ngOnInit(): void {
  }
  getSumPrice(){
    this.ORservice.total
  }

  SalesHistory_onLoading(){
    try{
      this.SHservice.getSaleshistoryrs().subscribe({
        next: data => {
          this.saleshistorys = data;
          
        },
        error: err => {
          console.log(err);
        }
      });
    }catch(err){
      console.log(err);
    }
  }

  
}

