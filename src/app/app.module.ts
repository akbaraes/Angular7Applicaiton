import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Main/app.component';
import { Sampledirective } from './shared/sampledirective';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { SampleLoopComponent } from './Test/sample-loop/sample-loop.component';
import { OnChangesComponent,OnChangesParentComponent } from './life-hock-test/life-hock-test.component';
import { ComponenttestComponent} from './componenttest/componenttest.component';
import { InterpolitiontestComponent } from './interpolitiontest/interpolitiontest.component';
import { ProperbindingtestComponent } from './properbindingtest/properbindingtest.component';
import { ClassbindingtestComponent } from './classbindingtest/classbindingtest.component';
import { EventbindingtestComponent } from './eventbindingtest/eventbindingtest.component';


@NgModule({
  declarations: [
    AppComponent,
    Sampledirective,
    EmployeeComponent,
    SampleLoopComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    ComponenttestComponent,
    InterpolitiontestComponent,
    ProperbindingtestComponent,
    ClassbindingtestComponent,
    EventbindingtestComponent,
    
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
