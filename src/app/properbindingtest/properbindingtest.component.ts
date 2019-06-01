import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properbindingtest',
  template: `
    <input [id]="myId" type="text" value="Akbar"/> <br/>
    <input [disabled]="isDisabled" type="text" value="Akbar"/> <br/>
    <input bind-disabled="isDisabled" type="text" value="Akbar"/> <br/>

  `,
  styles: []
})
export class ProperbindingtestComponent implements OnInit {
 public myId="MyIdTest";
 public isDisabled=true;

  constructor() { }

  ngOnInit() {
  }

}
