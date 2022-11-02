import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FlavourService } from 'src/app/services/flavour.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ToppingService } from 'src/app/services/topping.service';
import { ContainerService } from 'src/app/services/container.service';
import { SauceService } from 'src/app/services/sauce.service';
import { SetService } from 'src/app/services/set.service';

@Component({
  selector: 'app-updatemenu',
  templateUrl: './updatemenu.component.html',
  styleUrls: ['./updatemenu.component.css']
})
export class UpdatemenuComponent implements OnInit {

  flavourForm = new FormGroup({
    flavour_id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  toppingForm = new FormGroup({
    topping_id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  containerForm = new FormGroup({
    container_id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  sauceForm = new FormGroup({
    sauce_id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  setForm = new FormGroup({
    set_id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  
  previewLoaded: boolean = false;

  constructor(
    private FVservice: FlavourService,
    private TPservice: ToppingService,
    private CTservice: ContainerService,
    private SCservice: SauceService,
    private STservice: SetService
    ) { }

  ngOnInit(): void {
    
  }
  // 1.flavour
  addFlavour(){
    this.FVservice.addFlavour(this.flavourForm.value).subscribe({
      next: data => {
        alert('Flavour added succesfully');
        this.flavourForm.reset();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  Flavour_onChangeImg(e:any){
    if(e.target.files.length>0){
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewLoaded = true;
        this.flavourForm.patchValue({
          image: reader.result?.toString()
        })
      }
    }
  }

  Flavour_resetForm(){
    this.flavourForm.reset();
    this.previewLoaded = false;
  }
  // 2.topping
  addTopping(){
    this.TPservice.addTopping(this.toppingForm.value).subscribe({
      next: data => {
        alert('Topping added succesfully');
        this.toppingForm.reset();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  Topping_onChangeImg(e:any){
    if(e.target.files.length>0){
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewLoaded = true;
        this.toppingForm.patchValue({
          image: reader.result?.toString()
        })
      }
    }
  }

  Topping_resetForm(){
    this.toppingForm.reset();
    this.previewLoaded = false;
  }

  // 3.container
  addContainer(){
    this.CTservice.addContainer(this.containerForm.value).subscribe({
      next: data => {
        alert('Container added succesfully');
        this.containerForm.reset();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  Container_onChangeImg(e:any){
    if(e.target.files.length>0){
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewLoaded = true;
        this.containerForm.patchValue({
          image: reader.result?.toString()
        })
      }
    }
  }

  Container_resetForm(){
    this.containerForm.reset();
    this.previewLoaded = false;
  }
  // 4.sauce
  addSauce(){
    this.SCservice.addSauce(this.sauceForm.value).subscribe({
      next: data => {
        alert('Sauce added succesfully');
        this.sauceForm.reset();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  Sauce_onChangeImg(e:any){
    if(e.target.files.length>0){
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewLoaded = true;
        this.sauceForm.patchValue({
          image: reader.result?.toString()
        })
      }
    }
  }

  Sauce_resetForm(){
    this.sauceForm.reset();
    this.previewLoaded = false;
  }

  // 5.set
  addSet(){
    this.STservice.addSet(this.setForm.value).subscribe({
      next: data => {
        alert('Set added succesfully');
        this.setForm.reset();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  Set_onChangeImg(e:any){
    if(e.target.files.length>0){
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewLoaded = true;
        this.setForm.patchValue({
          image: reader.result?.toString()
        })
      }
    }
  }

  Set_resetForm(){
    this.setForm.reset();
    this.previewLoaded = false;
  }
}
