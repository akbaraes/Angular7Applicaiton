import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styles: []
})
export class ParentComponentComponent implements OnInit {
  

  public name="Akbar";
  public message="";

  constructor() { }

  ngOnInit() {
  }

  ReadData (data){
    this.message=data;
  }

  

}
