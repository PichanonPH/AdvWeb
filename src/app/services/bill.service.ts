import { Injectable } from '@angular/core';
import { billsModel } from '../bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  bills: billsModel = [];
  
  constructor() {}
}
