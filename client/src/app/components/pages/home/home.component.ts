import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/models/Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items: Item[] = [];

  constructor(
    private itemService: ItemService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.items = this.itemService.getItemsBySearchTerm(
          params['searchTerm']
        );
      } else {
        this.items = itemService.getAll();
      }
    });
  }
}
