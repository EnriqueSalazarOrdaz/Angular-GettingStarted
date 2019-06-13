import { Component, OnInit } from "@angular/core";
import { IProduct } from "../schema/Product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService] //this component injection and is only when u dont register the service at product.service.ts at root injector
})

export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {//just for services
    
    this.productService = productService;
    console.log('In OnInit1');
  }
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;

  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(v: string) {
    this._listFilter = v;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[];
  errorMessage:string;

  ngOnInit(): void {
    this.productService.getProducts().subscribe(//subscribe to observable
      products => {
        this.products = products
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any> error
    )
    
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}