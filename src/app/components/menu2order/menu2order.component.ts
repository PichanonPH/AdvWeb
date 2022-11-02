import { Component, OnInit,ViewChild } from '@angular/core';
import { FlavourService } from 'src/app/services/flavour.service';
import { ToppingService } from 'src/app/services/topping.service';
import { ContainerService } from 'src/app/services/container.service';
import { SauceService } from 'src/app/services/sauce.service';
import { SetService } from 'src/app/services/set.service';
import { MenuComponent } from '../menu/menu.component';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-menu2order',
  templateUrl: './menu2order.component.html',
  styleUrls: ['./menu2order.component.css']
})
export class Menu2orderComponent implements OnInit {

  @ViewChild(MenuComponent)
  menuComponent!: MenuComponent;

  flavours: any
  toppings: any
  containers: any
  sauces: any
  sets: any
  

  constructor(
    private FVservice: FlavourService,
    private TPservice: ToppingService,
    private CTservice: ContainerService,
    private SCservice: SauceService,
    private STservice: SetService,
    private ORservice: OrderService

    ) {
    this.Flavour_onLoading();
    this.Topping_onLoading();
    this.Container_onLoading();
    this.Sauce_onLoading();
    this.Set_onLoading();
  }

  ngOnInit(): void {
  }

  addToOrder(id:number){
    this.ORservice.add(id)
 }

  Flavour_onLoading(){
    try{
      this.FVservice.getFlavours().subscribe({
        next: data => {
          this.flavours = data;
          
        },
        error: err => {
          console.log(err);
        }
      });
    }catch(err){
      console.log(err);
    }
  }
  // ----------------------- 2.Topping -----------------------
    Topping_onLoading(){
      try{
        this.TPservice.getToppings().subscribe({
          next: data => {
            this.toppings = data;
          },
          error: err => {
            console.log(err);
          }
        });
      }catch(err){
        console.log(err);
      }
    }
  // ----------------------- 3.Container -----------------------
    Container_onLoading(){
      try{
        this.CTservice.getContainers().subscribe({
          next: data => {
            this.containers = data;
          },
          error: err => {
            console.log(err);
          }
        });
      }catch(err){
        console.log(err);
      }
    }
  // ----------------------- 4.Sauce -----------------------
    Sauce_onLoading(){
      try{
        this.SCservice.getSauces().subscribe({
          next: data => {
            this.sauces = data;
          },
          error: err => {
            console.log(err);
          }
        });
      }catch(err){
        console.log(err);
      }
    }
  // ----------------------- 5.Set -----------------------
    Set_onLoading(){
      try{
        this.STservice.getSets().subscribe({
          next: data => {
            this.sets = data;
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
  
  

