import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent {
  user!: User;
  orders!: [Order];

  constructor(
    userService: UserService,
    orderService: OrderService,
    activatedRoute: ActivatedRoute
  ) {
    this.user = userService.currentUser;

    const params = activatedRoute.snapshot.params;
    if (!params['userId']) {
      return;
    }

    orderService.getOrdersByUserId(params['userId']).subscribe((orders) => {
      this.orders = orders;
      console.log(orders);
      
    });
    
  }
}
