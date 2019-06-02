import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatere-rerence',
  template: `
    <h2>Welecome {{name}}</h2>

    <input type="text" #myinput/>

    <button (click)='UpdateName(myinput.value)'>Update</button>
  `,
  styles: []
})
export class TemplatereRerenceComponent implements OnInit {

  public name ="Akbar";
  constructor() { }

  ngOnInit() {
  }
  UpdateName(value){
    this.name=value;
  }

}
