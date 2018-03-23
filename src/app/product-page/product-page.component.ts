import { Component, OnInit, ViewChild } from '@angular/core';
import {ProductComponent} from "./product/product.component";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  @ViewChild(ProductComponent) productComp;
  constructor() { }

  ngOnInit() {
  }


  catchProduct(id) {
    this.productComp.setProduct(id);
  }



}
