import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  template: `
    <div [ngSwitch]="color">
    <div *ngSwitchCase="'Red'">You picked Red color</div>
    <div *ngSwitchCase="'Green'">You picked Green color</div>
    <div *ngSwitchCase="'Blue'">You picked Blue color</div>
    <div *ngSwitchDefault>Pick Again</div>

    </div>

    <button (click)="color='Red'">Red</button> <br/>
    <button (click)="color='Green'">Green</button> <br/>
    <button (click)="color='Blue'">Blue</button> <br/>
    <button (click)="color='Orange'">Orange</button> <br/>

  `,
  styles: []
})
export class SwitchDirectiveComponent implements OnInit {

  public color="Red";
  constructor() { }

  ngOnInit() {
  }

}
