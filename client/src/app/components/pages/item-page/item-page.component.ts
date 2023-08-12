import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';
import { Item } from 'src/app/shared/models/Item';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css'],
})
export class ItemPageComponent {
  item!: Item;
  user!: User;
  constructor(
    activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private cartService: CartService,
    private router: Router,
    userService: UserService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        itemService.getItemById(params['id']).subscribe((serverItem) => {
          this.item = serverItem;
        });
      }
    });

    this.user = userService.currentUser;
  }

  addToCart() {
    this.cartService.addToCart(this.item);
    this.router.navigateByUrl('/cart-page');
  }

  get isAdmin() {
    return this.user.isAdmin;
  }

  deleteItem(id: string) {
    this.itemService.deleteItemById(id).subscribe((_) => {
      this.router.navigateByUrl('/');
    });
  }
}
