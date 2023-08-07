import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../shared/models/Item';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addToCart(item: Item) {
    let cartItem = this.cart.items.find((x) => x.item.id === item.id);

    if (cartItem) {
      return;
    }

    this.cart.items.push(new CartItem(item));
    this.setCartToLocalStorage();
  }

  removeFromCart(itemId: string): void {
    this.cart.items = this.cart.items.filter((x) => x.item.id != itemId);
    this.setCartToLocalStorage();
  }

  changeQuantity(itemId: string, quantity: number) {
    let cartItem = this.cart.items.find((x) => x.item.id === itemId);

    if (!cartItem) {
      return;
    }

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.item.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentSum) => prevSum + currentSum.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentSum) => prevSum + currentSum.quantity,
      0
    );
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart); //notify listeners subscribed to the card observable
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
