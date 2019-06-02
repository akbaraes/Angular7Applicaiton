import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbindingtest',
  template: `
    <h2>Welcome {{name}}</h2>
    <button (click)='onclick()'>Great</button>
    <button (click)="name='Inline Value'">Inline</button>

  `,
  styles: []
})
export class EventbindingtestComponent implements OnInit {

  public name="Akbar";
  constructor() { }

  ngOnInit() {
  }
  onclick(){
    this.name="Button Click Test";
  }

}
