import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component'
import { SecondComponent } from './components/second/second.component'
import { ThirdComponent } from './components/third/third.component'
import { CartComponent } from './components/cart/cart.component'
import { MenuComponent } from './components/menu/menu.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
