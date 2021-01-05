import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getProductsUri: string;
  private postProductUri: string;
  public testUrl: string = "http://httpbin.org/post";
  
  constructor(private http: HttpClient) {
    this.getProductsUri = "https://localhost:44317/api/products";
    this.postProductUri = "http://localhost:8080/postModel";
   }

   //this function hits the server just like PostMan.
   public findAll(): Observable<Product[]> {
     return this.http.get<Product[]>(this.getProductsUri);
   }

   //add product to database via user input. still need to call from product.component
   public save(product : Product): Observable<Product> {
     return this.http.post<Product>(this.postProductUri, product); 
   } 
}
