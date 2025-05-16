import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/Cart.service';

@Component({
  selector: 'app-product[]',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product = input.required<any>();
  cartService = inject(CartService);
}
