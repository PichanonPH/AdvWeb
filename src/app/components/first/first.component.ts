import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile
  
  constructor() { 
    this.profile = {
      studentid: 'B6309343',
      name: 'ธนโชติ ศักดิ์ธรรมเจริญ',
      gender: 'Male',
      birthyear: 2001,
      email: 'B6309343@g.sut.ac.th',
      phone: '089-774-6982',
      img: 'http://www.sut.ac.th/2012/images/upload/editor/images/201406/logo.gif',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
  }
  Address_A(){
    alert(this.profile.address)
  }
  
}
