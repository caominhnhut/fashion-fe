import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { ClothingProductComponent } from './components/clothing/clothing-product/clothing-product.component';
import { ClothingSidebarComponent } from './components/clothing/clothing-sidebar/clothing-sidebar.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { ShoesSidebarComponent } from './components/shoes/shoes-sidebar/shoes-sidebar.component';
import { ShoesProductComponent } from './components/shoes/shoes-product/shoes-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SearchingComponent } from './components/searching/searching.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClothingComponent,
    ClothingProductComponent,
    ClothingSidebarComponent,
    ShoesComponent,
    ShoesSidebarComponent,
    ShoesProductComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    SearchingComponent,
    AuthenticationComponent,
    AdminComponent,
    AccountRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
