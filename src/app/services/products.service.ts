import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:8081/productManager'; // Update this with your Spring Boot API base URL

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/readProducts`);
  }

  // getProductById(id: number): Observable<Product> {
  //   return this.http.get<Product>(`${this.apiUrl}/actors/${id}`);
  //   //TODO: insert right url
  // }

  // getActorsByFirstName(fn: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}/actors/firstName/${fn}`);
  // }

  // getActorByFilmId(id: number): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}/actors/film/${id}`);
  // }

  // addProduct(actor: Product): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/actors`, actor);
  //   //TODO: insert right url
  // }

  // updateProduct(actor: Product): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/actors/${actor.actorId}`, actor);
  //   //TODO: insert right url
  // }

  // deleteProduct(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/actors/${id}`);
  //   //TODO: insert right url
  // }
}
