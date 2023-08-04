import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    let itemsObservable: Observable<Item[]>;

    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        itemsObservable = this.itemService.getItemsBySearchTerm(
          params['searchTerm']
        );
      } else if (params['tag']) {
        itemsObservable = this.itemService.getAllItemsByTag(params['tag']);
      } else {
        itemsObservable = itemService.getAll();
      }

      itemsObservable.subscribe((serverItems) => {
        this.items = serverItems;
      });
    });
  }
}
