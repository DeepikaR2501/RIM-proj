import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from 'moment';
import { AppDateAdapter, APP_DATE_FORMATS } from '../date-adaptor';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [
    DatePipe,
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class ProductsComponent implements OnInit {
  productsForm: FormGroup;
  user: any = [];
  productsData: any;
  product: any;
  timeKeyUp: boolean = false;
  showLeft: boolean = true;
  minDate = new Date(Date.now());
  @ViewChild('picker', { static: false }) picker;
  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    this.productsForm = fb.group({
      'name': [null, Validators.required],
      'price': [null, Validators.required],
      'date': [null, Validators.required],
      'time': [null, Validators.required]
  });
   }

  ngOnInit() {
    this.productsForm.reset();
    this.product = JSON.parse(localStorage.getItem('products'));
    for(let i = 0; i < this.product.length ; i++ ) {
      let today = new Date();
      // let formatedDate = today.getDate()"/" today.getMonth()/today.getFullYear();
      let formatedDate =  this.datePipe.transform(today, "dd/MM/yyyy");
      let formatedTime =  this.datePipe.transform(today, "hh:00");
      if( formatedDate == this.product[i].date) {
        if ( formatedTime == this.product[i].time ){
          this.product[i].availabe = true;
        } else {
          this.product[i].availabe = false;
        }
      } else {
          this.product[i].availabe = false;
        }
    }
    this.productsData = this.product;
  }
  openPicker() {
    this.picker.open();
  }
  addUser(formValues) {
    debugger;
    let formatedDate =  this.datePipe.transform(formValues.date, "dd/MM/yyyy");
    this.productsData = [];
    let data = localStorage.getItem('products');
    let userdata = { name : formValues.name , time: formValues.time , date: formatedDate , price: formValues.price};
    if( data != null) {
      this.productsData = JSON.parse(data);
      this.productsData.push(userdata);
    } else{
      this.productsData[0] = userdata;
    }
    localStorage.setItem('products', JSON.stringify(this.productsData));

    this.product = JSON.parse(localStorage.getItem('products'));
    for(let i = 0; i < this.product.length ; i++ ) {
      let today = new Date();
      // let formatedDate = today.getDate()"/" today.getMonth()/today.getFullYear();
      let formatedDate =  this.datePipe.transform(today, "dd/MM/yyyy");
      let formatedTime =  this.datePipe.transform(today, "hh:00");
      if( formatedDate == this.product[i].date) {
        if ( formatedTime == this.product[i].time ){
          this.product[i].availabe = true;
        } else {
          this.product[i].availabe = false;
        }
      } else {
          this.product[i].availabe = false;
        }
    }
    this.productsData = this.product;
    this.productsForm.reset();
  }
  addtocart(product) {
    for(let i = 0 ; i< this.productsData.length ; i++) {
       if( product.name == this.productsData[i].name) {
            this.productsData[i].added = true;
       }
    }
    localStorage.setItem('products', JSON.stringify(this.productsData));
  }
  removeItem(product) {
    for(let i = 0 ; i< this.productsData.length ; i++) {
       if( product.name == this.productsData[i].name) {
            this.productsData[i].added = false;
       }
    }
    localStorage.setItem('products', JSON.stringify(this.productsData));
  }
}

