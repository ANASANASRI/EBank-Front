import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrl: './customerdetails.component.css'
})
export class CustomerdetailsComponent {
customer: any;

constructor(private route: ActivatedRoute,private cs: CustomerService) {}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if (id) {
      this.getCustomerById(id);
    }
  });
}

private getCustomerById(id: string): void {
    this.cs.getCustomerById(id).subscribe(
        (resp: any) => {
            this.customer = resp;
        },
        (error) => {
            console.error('Error fetching customer', error);
        }
    );
}
}
