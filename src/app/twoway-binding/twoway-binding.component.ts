import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
   <input type="text" [(ngModel)]="name"/>
   {{name}}
  `,
  styles: []
})
export class TwowayBindingComponent implements OnInit {
public name="";
  constructor() { }

  ngOnInit() {
  }

}
