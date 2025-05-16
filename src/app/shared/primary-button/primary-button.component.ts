import { Component, inject, input, output } from '@angular/core';
import { CartService } from '../../services/Cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-primary-button',
  imports: [RouterLink],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  label = input.required<string>();
  btnClick = output();
  cartService  = inject(CartService)

  primaryButtonClick () {
    this.btnClick.emit();
  }
}
