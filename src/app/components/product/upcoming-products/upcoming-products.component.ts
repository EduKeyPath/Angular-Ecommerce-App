import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-upcoming-products',
  templateUrl: './upcoming-products.component.html',
  styleUrls: ['./upcoming-products.component.css']
})
export class UpcomingProductsComponent implements OnInit {
  upcomingProduct:any = [];

  constructor( private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getUpcomingProducts();
  }

  getUpcomingProducts(){
    try{
      this.productService.getProductList().subscribe(item => {
        let resData:any = item;
        let productData = resData.data.upComProduct;
        this.upcomingProduct = productData;
        // console.log(productData, 'productData')
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
