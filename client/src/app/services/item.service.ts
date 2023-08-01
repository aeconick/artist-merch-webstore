import { Injectable } from '@angular/core';
import { Item } from '../shared/models/Item';
import { sample_items, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tags';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  getAll(): Item[] {
    return sample_items;
  }

  getItemsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllItemsByTag(tag: string): Item[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((item) => item.tags?.includes(tag));
  }
}
