import { Component, OnInit, SimpleChange, Input, OnChanges } from '@angular/core';
import { Customer } from '../shared/customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
 
  
  constructor() {
  
  }

 
  
  title = 'CustomerApplication';
}
