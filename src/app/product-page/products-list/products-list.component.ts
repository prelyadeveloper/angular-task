import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Output('productSend') productSend = new EventEmitter();
  public products ;
  constructor(private productApi: ProductService) {}

  ngOnInit() {
    this.products = this.productApi.getProducts();
  }

  chooseProduct(id: number) {

    return this.productSend.emit(id);
  }

}
