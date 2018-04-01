import {Component, enableProdMode} from '@angular/core';
import {DirTreeService} from '../dir-tree.service';
import {Product} from '../product';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-dir-tree',
  templateUrl: './dir-tree.component.html',
  styleUrls: ['./dir-tree.component.css'],
})
export class DirTreeComponent {
  products: Product[];
  currentItem: Product;

  constructor(service: DirTreeService) {
    this.products = service.getProducts();
    this.currentItem = this.products[0];
  }

  selectItem(e) {
    this.currentItem = e.itemData;
  }
}
