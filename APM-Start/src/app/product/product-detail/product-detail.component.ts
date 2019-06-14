import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../schema/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  errorMsj: string;


  constructor(private route: ActivatedRoute, private productService: ProductService) {
    console.log(this.route.snapshot.paramMap.get('id'));

  }

  ngOnInit() {
    let id:string = this.route.snapshot.paramMap.get('id');//+ is shorcut to convert string to numeric
    this.pageTitle += `: ${id}`;
    if (id) {//validate if id != undefined
      let idNumerci:number = +id;
      this.getProduct(idNumerci)
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      productItem => this.product = productItem,
      error => this.errorMsj = <any>error
    );
  }

}
