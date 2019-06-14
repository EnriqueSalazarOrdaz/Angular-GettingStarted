import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../schema/Product';
@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string;
  Product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
