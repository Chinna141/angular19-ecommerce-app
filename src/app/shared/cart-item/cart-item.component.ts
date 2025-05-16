import { Component, inject, input, output } from '@angular/core';
import { CartService } from '../../services/Cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  cartItemInfo = input.required<any>();
  removeItem = output<number>();
  cartService = inject(CartService);
}
