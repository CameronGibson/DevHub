import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = "http://localhost:8080/getAllModels";
   }

   //this function hits the server just like PostMan.
   public findAll(): Observable<Product[]> {
     return this.http.get<Product[]>(this.productsUrl);
   }
}
