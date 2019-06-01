import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolitiontest',
  template: `<h2>{{name}}<h2>
  <h2>{{5+9}}</h2>
  <h2>{{'Welcome'+ name}}</h2>
  <h2>{{'Name Length= '+ name.length}}</h2>
  <h2>{{'Name Upppercase= '+ name.toUpperCase()}}</h2>
  <h2>{{getUserName()}}</h2>

  `,
  styles: []
})
export class InterpolitiontestComponent implements OnInit {

  public name:string="akbar";
  constructor() { }

  ngOnInit() {
  }

  getUserName(){
    return "Welcome from method "+this.name;
  }

}
