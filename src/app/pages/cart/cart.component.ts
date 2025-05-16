import { Component, inject } from '@angular/core';
import { CartService } from '../../services/Cart.service';
import { CartItemComponent } from "../../shared/cart-item/cart-item.component";
import { OrderSumarryComponent } from "../../shared/order-sumarry/order-sumarry.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSumarryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);
  cartItems = this.cartService.cart;
}
