import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component'
import { SecondComponent } from './components/second/second.component'
import { ThirdComponent } from './components/third/third.component'
import { CartComponent } from './components/cart/cart.component'
import { MenuComponent } from './components/menu/menu.component';
import { AddflavourComponent } from './components/addflavour/addflavour.component';
import { UpdatemenuComponent } from './components/updatemenu/updatemenu.component';
import { Menu2orderComponent } from './components/menu2order/menu2order.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SaleshistoryComponent } from './components/saleshistory/saleshistory.component';
const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'third', component: ThirdComponent},
  {path: 'cart', component: CartComponent},
  {path: '', 
    redirectTo: 'first', 
    pathMatch: 'full'          
  },
  {path: 'menu', component: MenuComponent},
  {path: 'updateMenu', component: UpdatemenuComponent},
  {path: 'menu2order', component: Menu2orderComponent},
  {path: 'order', component: OrderComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'saleshistory', component: SaleshistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
