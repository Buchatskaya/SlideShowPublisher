import {Injectable} from '@angular/core';

import {Product} from './product';
import {PRODUCTS} from './mock-products';

@Injectable()
export class DirTreeService {
  getProducts(): Product[] {
    return PRODUCTS;
  }
}
