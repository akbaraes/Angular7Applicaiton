import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbindingtest',
  template: `
    <h2 class='text-success'> class property binding test</h2>
    <h2 [class]='successclass'> class property binding test</h2>
    <h2 class='text-special' [class]='successclass'> combined class property binding test</h2>
    <h2 [class.text-failure]='hasError'> condition class property binding test</h2>
    <h2 [ngClass]='messageclass'> condition class property binding test</h2>

  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-failure{
    color:red;
  }
  .text-special
  {
    font-style:italic
  }
  `]
})
export class ClassbindingtestComponent implements OnInit {
public successclass="text-success";
public hasError=true;
public hasSpecial=true;
public messageclass={
"text-success":!this.hasError,
"text-failure":this.hasError,
"text-special":this.hasSpecial
}

  constructor() { }

  ngOnInit() {
  }

}
