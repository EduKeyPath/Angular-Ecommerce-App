import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  reviewList:any = [];

  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(){
    try{
      this.productService.getProductList().subscribe(item => {
        let resData:any = item;
        let reviewdata = resData.data.cusReviews;
        this.reviewList = reviewdata;
        // console.log(resData, 'resData')
      })
    }
    catch(err){
      console.log(err)
    }
  }

}
