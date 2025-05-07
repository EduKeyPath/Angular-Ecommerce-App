import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productList:any = [];

  constructor( private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    try{
      this.productService.getProductList().subscribe(item => {
        let resData:any = item;
        let productData = resData.data.product;
        this.productList = productData;
        console.log(productData, 'productData')
      })
    }
    catch(err){
      console.log(err)
    }
  }

  details(pId:number){
    this.router.navigate([`/products/product-details/${pId}`])
  }

}
