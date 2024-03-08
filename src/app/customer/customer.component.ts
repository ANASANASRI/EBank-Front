import { CustomerService } from '../services/customer.service';
import { Customer } from './../model/customer.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  protected customer: any;

  constructor(private cs: CustomerService) {}

  ngOnInit() {
      this.getCustomers();
  }

  private getCustomers(): void {
      this.cs.getCustomers().subscribe(
          (resp: any) => {
              this.customer = resp;
          },
          (error) => {
              console.error('Error fetching customers', error);
          }
      );
  }
}
