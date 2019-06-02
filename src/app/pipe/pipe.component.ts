import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
  <h1>String Pipes</h1>

    <h2>{{name}}</h2>

    <h2>{{name | lowercase}}</h2>

    <h2>{{name | uppercase}}</h2>

    <h2>{{message | titlecase}}</h2>

    <h2>{{message | slice:2}}</h2>

    <h2>{{message | slice:2:5}}</h2>

    <h2>{{person | json}}</h2>

    <h1>Number Pipes</h1>

    <h2>{{5.678|number:'1.2-3'}}</h2>

    <h2>{{5.678|number:'4.4-5'}}</h2>

    <h2>{{5.678|number:'2.2-2'}}</h2>

    <h1>Curreny</h1>

    <h2>{{0.25 | currency:'INR'}}</h2>

    <h2>{{0.25 | currency:'INR' :'code'}}</h2>

    <h1>Date</h1>

    <h2>{{date}}</h2>

    <h2>{{date | date:'short'}}</h2>

    <h2>{{date | date:'shortDate'}}</h2>

    <h2>{{date | date:'shortTime'}}</h2>

    <h2>{{date | date:'dd/mm/yyyy'}}</h2>
  `,
  styles: []
})
export class PipeComponent implements OnInit {
public name="Akbar";
public message="Welcome to india";
public person ={
  "Firstname":"Akbar",
  "Lastname":"Jinna"
};

public date=new Date();

  constructor() { }

  ngOnInit() {
  }

}
