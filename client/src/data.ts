import { Item } from './app/shared/models/Item';
import { Tag } from './app/shared/models/Tags';

export const sample_items: Item[] = [
  {
    id: '1',
    name: 'Taylor Swift',
    description: 'afasfasf',
    price: 10,
    imageUrl: 'assets/taylor-swift.jpg',
    tags: ['ts', 'taylor'],
  },
  {
    id: '2',
    name: 'Joe Alwyn',
    price: 20,
    description: 'fasfasf',
    imageUrl: 'assets/taylor-swift.jpg',
    tags: ['ja', 'joe'],
  },
];

export const sample_tags: Tag[] = [
  { name: 'ts', count: 1 },
  { name: 'taylor', count: 1 },
  { name: 'ja', count: 1 },
  { name: 'joe', count: 1 },
];
