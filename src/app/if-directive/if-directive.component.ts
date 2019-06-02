import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  template: `
    <h2 *ngIf="ShowDisplayName;else elseBlcok;">
    If Success
    </h2>

    <ng-template #elseBlcok>
    <h2>
    Else Message
    </h2>
    </ng-template>

    <button (click)='ShowDisplayName=!ShowDisplayName'>Toggle Message</button> <br/>

    ----------------- Second Way ----------------------

  <div *ngIf="ShowDisplayName; then thenblock; else else1Blcok;"></div>

    <ng-template #thenblock>
    <h2>
    If Message
    </h2>
    </ng-template>


    <ng-template #else1Blcok>
    <h2>
    Else Message
    </h2>
    </ng-template>



  `,
  styles: []
})
export class IfDirectiveComponent implements OnInit {
public ShowDisplayName=true;
  constructor() { }

  ngOnInit() {
  }

}
