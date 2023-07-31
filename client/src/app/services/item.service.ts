import { Injectable } from '@angular/core';
import { Item } from '../shared/models/Item';
import { sample_items } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  getAll(): Item[] {
    return sample_items;
  }

  getItemsBySearchTerm(searchTerm:string){
    return this.getAll().filter(item =>item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
