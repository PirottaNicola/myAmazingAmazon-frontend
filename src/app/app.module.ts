import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './views/homepage/homepage.component';
import { CartComponent } from './views/cart/cart.component';
import { OrdersComponent } from './views/orders/orders.component';
import { ErrorComponent } from './views/error/error.component';

@NgModule({
  // The declarations array is used to define the components, directives, and pipes that are used in the application
  declarations: [AppComponent, NavbarComponent, HomePageComponent, CartComponent, OrdersComponent, ErrorComponent],
  // The imports array is used to import other modules into the application
  imports: [BrowserModule, AppRoutingModule],
  // The providers array is used to define the services that are used in the application
  providers: [],
  // The bootstrap array is used to define the root component of the application
  bootstrap: [AppComponent],
})
export class AppModule {}
