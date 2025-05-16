import { Component, signal } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../../modals/product';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-productlist',
  imports: [ProductComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
  products = signal<Product[]>([])

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadProducts();
  }

   async loadProducts() {
    const resData = await fetch('https://dummyjson.com/products/search?q=phone');
    const getData = await resData.json();
    this.products.set(getData.products)
   }
}
