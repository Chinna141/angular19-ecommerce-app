import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/Cart.service';

@Component({
  selector: 'app-order-sumarry',
  imports: [],
  templateUrl: './order-sumarry.component.html',
  styleUrl: './order-sumarry.component.scss'
})
export class OrderSumarryComponent {
  cartService = inject(CartService);
  total = computed(() => {
    return this.cartService.cart().reduce((sum, item) => sum+item.price, 0)
  })
}
