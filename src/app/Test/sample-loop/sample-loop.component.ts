import { Component, OnInit, SimpleChange, Input, OnChanges } from '@angular/core';
import { Customer } from '../../shared/customer';


@Component({
  selector: 'app-sample-loop',
  templateUrl: './sample-loop.component.html',
  styleUrls: []
})
export class SampleLoopComponent implements OnInit {

  @Input() changeText:string;
  customers:Customer[];
  customertest:Customer;
  
  constructor() {
    console.log("Parent constructor done");
    
    this.changeText='Akbar';
    // this.customers.push(new Customer(1,'Akbar','Jinna'));
    // this.customers.push(new Customer(2,'Jankeer','Jinna'));
  this.customers=  [
      { CustomerId: 1, FirstName: 'Mr. Nice',  LastName: 'happy'},
      { CustomerId: 2, FirstName: 'Narco',     LastName: 'sad' },
      { CustomerId: 3, FirstName: 'Windstorm', LastName: 'confused' },
      { CustomerId: 4, FirstName: 'Magneta',LastName:'Test'}
    ]
    this.customers.push({ CustomerId: 5, FirstName: 'Magneta23',LastName:'Test12'});
    this.customertest=this.customers[0];
  }

  ngOnInit() {
    console.log("ngOnInit done");
    this.changeText='Akbar';

  }
  CheckTest(){
    debugger;
    this.changeText="Text Changed";
  }
  ngOnChanges(){
    console.log("ngOnChanges done");
  }
  
  title = 'CustomerApplication';

}
