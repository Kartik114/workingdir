import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor( private http:HttpClient) {}

  getAllProducts() {
     return this.http.get("http://fakestoreapi.com/products");
  }

}

