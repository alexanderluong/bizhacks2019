import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filteredProducts: any  = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.Search().subscribe((data: any) => {
      let products = data.searchApi.documents; 
      products.forEach(prod => {
        let skuId = prod.skuId 
        this.data.filterProduct(skuId).subscribe((spec: any) => {
          this.filteredProducts.push(spec);
        } )
      })
      
      console.log(this.filteredProducts);
    })
  }

}
