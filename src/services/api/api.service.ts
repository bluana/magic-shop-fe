import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from 'src/models/cart.model';
import { Clothing } from 'src/models/clothing.model';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  };  

  constructor(private http: HttpClient) {}

  login(user: User): Promise<any>{
    return this.http.post(`${this.baseUrl}/login`, user, this.httpOptions).toPromise();
  }

  register(user: User): Promise<any>{
    return this.http.post(`${this.baseUrl}/users`, user, this.httpOptions).toPromise();
  }

  getClothes(): Promise<Clothing[]>{
    return this.http.get<Clothing[]>(`${this.baseUrl}/clothes`, this.httpOptions).toPromise();
  }

  getClothing(id: number): Promise<Clothing>{
    return this.http.get<Clothing>(`${this.baseUrl}/clothes/${id}`, this.httpOptions).toPromise();
  }

  createClothing(clothing: Clothing): Promise<any>{
    return this.http.post(`${this.baseUrl}/clothes`, clothing, this.httpOptions).toPromise();
  }

  updateClothing(id: number, clothing: Clothing): Promise<any>{
    return this.http.put(`${this.baseUrl}/clothes/${id}`, clothing, this.httpOptions).toPromise();
  }

  deleteClothing(id: number): Promise<any>{
    return this.http.delete(`${this.baseUrl}/clothes/${id}`, this.httpOptions).toPromise();
  }

  getCart(id: number): Promise<Cart>{
    return this.http.get<Cart>(`${this.baseUrl}/carts/${id}`, this.httpOptions).toPromise();
  }

  updateCart(id: number, cart: Cart): Promise<any>{
    return this.http.put<Cart>(`${this.baseUrl}/carts/${id}`, cart, this.httpOptions).toPromise();
  }
}
