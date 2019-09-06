import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from  './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    SharedModule,
    CoreModule,
    OrdersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
