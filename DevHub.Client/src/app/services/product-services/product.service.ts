import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

//http header.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getProductsUrl: string;
  private postProductUrl: string;
  public testUrl: string = "http://httpbin.org/post";
  
  constructor(private http: HttpClient) {
    this.getProductsUrl = "http://localhost:8080/getAllModels";
    this.postProductUrl = "http://localhost:8080/postModel";
   }

   //this function hits the server just like PostMan.
   public findAll(): Observable<Product[]> {
     return this.http.get<Product[]>(this.getProductsUrl);
   }

   //add product to database via user input. still need to call from product.component
   public save(product : Product): Observable<Product> {
     return this.http.post<Product>(this.postProductUrl, product, httpOptions); 
   } 
}
