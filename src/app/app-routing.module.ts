import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { ClothingProductComponent } from './components/clothing/clothing-product/clothing-product.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { ShoesProductComponent } from './components/shoes/shoes-product/shoes-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'clothing',
    component: ClothingComponent,
    children: [{ path: ":id",  component: ClothingProductComponent}]
  },
  { 
    path: 'shoes',
    component: ShoesComponent,
    children: [{ path: ":id",  component: ShoesProductComponent}]
  },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: "**", redirectTo:"home" }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
