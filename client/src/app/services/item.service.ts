import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Item } from '../shared/models/Item';
import { Tag } from '../shared/models/Tags';
import {
  ITEMS_BY_SEARCH_URL,
  ITEMS_BY_TAG_URL,
  ITEMS_TAGS_URL,
  ITEMS_URL,
  ITEM_BY_ID_URL,
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

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
}
