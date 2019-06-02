import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  template: `
    <div *ngFor="let color of colors;index as i;even as e;first as f;last as l;">
    <h2>{{i}} - {{e}}- {{f}}-{{l}}-{{color}}</h2>
    </div>
  `,
  styles: []
})
export class ForDirectiveComponent implements OnInit {

  public colors=["Red","Blue","Yellow","Green"];

  constructor() { }

  ngOnInit() {
  }

}
