import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Main/app.component';
import { Sampledirective } from './shared/sampledirective';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { SampleLoopComponent } from './Test/sample-loop/sample-loop.component';
import { LifeHockTestComponent } from './life-hock-test/life-hock-test.component';


@NgModule({
  declarations: [
    AppComponent,
    Sampledirective,
    EmployeeComponent,
    SampleLoopComponent,
    LifeHockTestComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
