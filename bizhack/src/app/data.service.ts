import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  Search(){
    return this.http.get('https://bizhacks.bbycastatic.ca/mobile-si/si/v3/products/search?query=laptop&storeId=&zipCode=&facetsOnly=&platform=&lang=en')
  }

  filterProduct(id: string){
    return this.http.get('https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/'+ id + '?lang=en')
  }
}

