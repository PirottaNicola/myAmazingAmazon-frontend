import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { ErrorComponent } from './views/error/error.component';
import { HomePageComponent } from './views/homepage/homepage.component';
import { OrdersComponent } from './views/orders/orders.component';

// this array is used to define the routes for the application. Each route is an object with two properties: path and component. The path property is used to define the URL for the route, and the component property is used to define the component that should be displayed when the route is activated.
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    // The last route in the array is used to define a default route for the application
    path: '**', // wildcard route that matches any URL that does not match any of the defined routes
    component: ErrorComponent,
    pathMatch: 'full', // to ensure that the default route is only activated when the full URL matches the path property. If the pathMatch property is not set to 'full', the default route will be activated when the URL STARTS with the path property
  },
];

// The @NgModule decorator is used to define the AppModule class as an Angular module, meaning it is a class that can be used to define the structure of an Angular application. The @NgModule decorator takes a single metadata object that describes how to compile a component's template and how to create an injector at runtime. The metadata object has the following properties: declarations, imports, providers, bootstrap, and exports.
@NgModule({
  // The imports array is used to import other modules into the application. The RouterModule.forRoot() method is used to define the routes for the application. The routes array is passed as an argument to the RouterModule.forRoot() method.
  imports: [RouterModule.forRoot(routes)],
  // The exports array is used to export the RouterModule so that it can be used in other modules.
  exports: [RouterModule],
})
export class AppRoutingModule {}
