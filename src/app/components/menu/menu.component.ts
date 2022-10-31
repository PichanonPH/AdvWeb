import { Component, OnInit } from '@angular/core';
import { FlavourService } from 'src/app/services/flavour.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  flavours: any
  constructor(private FVservice: FlavourService ) {}

  ngOnInit(): void {
  }

  getAllFlavour(){
    return this.FVservice.getAllFlavour()
  }

  onLoading(){
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
}
