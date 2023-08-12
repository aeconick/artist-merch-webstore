import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Item } from '../shared/models/Item';
import { Tag } from '../shared/models/Tags';
import {
  ITEMS_BY_SEARCH_URL,
  ITEMS_BY_TAG_URL,
  ITEMS_TAGS_URL,
  ITEMS_URL,
  ITEM_BY_ID_URL,
  ITEM_CREATE,
} from '../shared/constants/urls';
import { ICreateItem } from '../shared/interfaces/ICreateItem';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient,private toastrService:ToastrService) {}

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(ITEMS_URL);
  }

  getItemsBySearchTerm(searchTerm: string) {
    return this.http.get<Item[]>(ITEMS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(ITEMS_TAGS_URL);
  }

  getAllItemsByTag(tag: string): Observable<Item[]> {
    return tag === 'All'
      ? this.getAll()
      : this.http.get<Item[]>(ITEMS_BY_TAG_URL + tag);
  }

  getItemById(itemId: string): Observable<Item> {
    return this.http.get<Item>(ITEM_BY_ID_URL + itemId);
  }

  createItem(item: ICreateItem): Observable<Item> {
    return this.http.post<Item>(ITEM_CREATE, item).pipe(
      //cannot use .subscribe, bcs return type will be subscription and not observable
      tap({
        next: (item) => {
          this.toastrService.success(
            `You created item ${item.name}!`,
            'Create Was Successful'
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Create Failed');
        },
      })
    );
  }
}
