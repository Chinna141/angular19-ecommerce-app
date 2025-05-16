import { Routes } from '@angular/router';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductlistComponent },
  {
    path: 'cart',
    component: CartComponent,
  },
];
