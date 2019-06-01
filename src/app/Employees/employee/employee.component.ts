import { Component, OnInit, OnChanges, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: []
})
export class EmployeeComponent implements OnInit,OnChanges,OnDestroy,DoCheck {

  constructor() {
console.log("Child constructor initialized")

   }

  ngOnInit() {
    console.log("Child constructor ngOnInit")
 }
 ngOnChanges() {
  console.log("Child constructor ngOnChanges")
}
ngOnDestroy() {
  console.log("Child constructor ngOnDestroy")
}
ngDoCheck() {
  console.log("Child constructor ngDoCheck")
}
}
