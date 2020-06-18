import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 product: any;
 cartData: any;
 seller: any;
 website: any;
 charity: any;
 stax : any;
 ctax: any;
 wtax: any;
 sellerTotal: any;
 websiteTotal: any;
 charityTotal: any;
 totalPrice : number = 0; 
 grandTotal : any;
  constructor() { }

  ngOnInit() {
    this.product = JSON.parse(localStorage.getItem('products'));
    this.cartData = []
    for(let i = 0; i < this.product.length ; i++ ) {
      if(this.product[i].added == true) {
          this.cartData.push(this.product[i]);
          this.totalPrice = this.totalPrice + this.product[i].price;
      }
    }
  }
  orderPlaced() {
     if( this.totalPrice <= 100) {
        this.seller = Math.round((this.totalPrice * 70 * 1) / 100);
        this.website = Math.round((this.totalPrice * 20 * 1) / 100);
        this.charity = Math.round((this.totalPrice * 10 * 1) / 100);
     }
    else if( this.totalPrice > 100 && this.totalPrice <= 500) {
      this.seller = Math.round((this.totalPrice * 65 * 1) / 100);
        this.website = Math.round((this.totalPrice * 20 * 1) / 100);
        this.charity = Math.round((this.totalPrice * 15 * 1) / 100);
    } else if(this.totalPrice > 500) {
      this.seller = Math.round((this.totalPrice * 33.33 * 1) / 100);
      this.website = Math.round((this.totalPrice * 33.33 * 1) / 100);
      this.charity = Math.round((this.totalPrice * 33.33 * 1) / 100);
    }
    this.stax = Math.round((this.seller * 19 * 1) / 100);
        this.wtax = Math.round((this.website * 19 * 1) / 100);
        this.ctax = Math.round((this.charity * 19 * 1) / 100);
        this.sellerTotal = this.seller + this.stax;
        this.websiteTotal = this.website + this.wtax;
        this.charityTotal = this.charity + this.ctax;
        this.grandTotal = this.sellerTotal + this.charityTotal + this.websiteTotal;
  }
}
