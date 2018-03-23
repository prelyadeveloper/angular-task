import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from "../../services/product.service";
import {FeedbackService} from "../../services/feedback.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product;
  reviews;
  constructor(private prApi: ProductService, private rewApi: FeedbackService) { }

  ngOnInit() {
  }

  setProduct(id: number) {
    this.product = this.prApi.getProduct(id);

    this.reviews = this.rewApi.getReviews(id);
  }




}
