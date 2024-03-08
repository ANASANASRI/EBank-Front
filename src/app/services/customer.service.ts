import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.module';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private backendHost = 'http://localhost:8085';

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.backendHost}/customers/`);
  }
  public getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.backendHost}/customers/`+id);
  }
}
