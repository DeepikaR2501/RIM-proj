import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';
import { CartComponent } from './cart/cart.component';
const appRoutes: Routes = [
  {
      path: '',
      pathMatch: 'full',
     redirectTo: 'home'
  },  
  {
      path: 'home',
      component: AboutUsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
},
{
  path: 'cart',
  component: CartComponent
}
  ];
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,ProductsComponent
,CartComponent  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
       FormsModule,
       MatDatepickerModule,
    ReactiveFormsModule,
    AmazingTimePickerModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
