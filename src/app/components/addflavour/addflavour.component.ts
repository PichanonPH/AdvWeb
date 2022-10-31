import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { FlavourService } from 'src/app/services/flavour.service';
@Component({
  selector: 'app-addflavour',
  templateUrl: './addflavour.component.html',
  styleUrls: ['./addflavour.component.css']
})
export class AddflavourComponent implements OnInit {

  flavourForm = new FormGroup({
    flavour_id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  previewLoaded: boolean = false;

  constructor(private FVservice: FlavourService) { }

  ngOnInit(): void {
  }

  addFlavour(){
    this.FVservice.addProduct(this.flavourForm.value).subscribe({
      next: data => {
        alert('Product added successfully');
        this.flavourForm.reset();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onChangeImg(e:any){
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

  resetForm(){
    this.flavourForm.reset();
    this.previewLoaded = false;
  }
  

}
