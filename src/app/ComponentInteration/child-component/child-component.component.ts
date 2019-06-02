import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <h2>Data from parent Controller is <p style='color:red'> {{name}}</p></h2>
    <br/>
    <button (click)="SendData()">Send Data</button>
  `,
  styles: []
})
export class ChildComponentComponent implements OnInit,OnChanges {

  //@Input()  public parentData="";

  //Second way
  @Input('parentData')  public name="";
  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  SendData(){
    this.childEvent.emit("Sample");
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    for(let propname in changes){
      var change=changes[propname];
      console.log(propname +" Previous Value is "+ change.previousValue);
      console.log(propname +" Current Value is "+ change.currentValue);
   }
  }
}
