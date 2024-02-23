import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './views/cart/cart.component';
import { ErrorComponent } from './views/error/error.component';
import { HomePageComponent } from './views/homepage/homepage.component';
import { OrdersComponent } from './views/orders/orders.component';

// nebular imports
import {
  NbButtonGroupModule,
  NbButtonModule,
  NbLayoutModule,
  NbMenuModule,
  NbThemeModule,
  NbToggleModule,
} from '@nebular/theme';

@NgModule({
  // The declarations array is used to define the components, directives, and pipes that are used in the application
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CartComponent,
    OrdersComponent,
    ErrorComponent,
  ],
  // The imports array is used to import other modules into the application
  imports: [
    BrowserModule, // The BrowserModule module is used to import the basic directives and services that are used to run the application in the browser
    AppRoutingModule, // The AppRoutingModule module is used to define the routes for the application
    StoreModule.forRoot({}, {}), // The AppRoutingModule module is used to define the routes for the application
    NbThemeModule.forRoot({ name: 'default' }), // nebular theme module (default theme)
    NbLayoutModule, // nebular layout module
    NbButtonModule, // nebular button module
    NbMenuModule.forRoot(), // nebular menu module
    NbButtonGroupModule, // nebular button group module
    NbToggleModule, // nebular toggle module
  ],
  // The providers array is used to define the services that are used in the application
  providers: [],
  // The bootstrap array is used to define the root component of the application
  bootstrap: [AppComponent],
})
export class AppModule {}
