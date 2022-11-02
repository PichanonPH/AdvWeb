import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddflavourComponent } from './components/addflavour/addflavour.component';
import { UpdatemenuComponent } from './components/updatemenu/updatemenu.component';
import { Menu2orderComponent } from './components/menu2order/menu2order.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SaleshistoryComponent } from './components/saleshistory/saleshistory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CartComponent,
    MenuComponent,
    AddflavourComponent,
    UpdatemenuComponent,
    Menu2orderComponent,
    OrderComponent,
    PaymentComponent,
    SaleshistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
