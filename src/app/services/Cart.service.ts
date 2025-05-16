import { Injectable, input, signal } from "@angular/core";
import { Product } from "../modals/product";

@Injectable({
    providedIn: 'root'
})

export class CartService {

    cart = signal<Product[]>([]);

    addToCart(product: Product){
        this.cart.set([...this.cart(), product]);
        setTimeout(() => {
            alert("Product added to cart!!")
        }, 300);
    }

    removeCartItem(id: number) {
        this.cart.set(this.cart().filter((i) => i.id !== id))
    }

}