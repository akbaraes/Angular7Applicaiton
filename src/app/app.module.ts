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
import { TemplatereRerenceComponent } from './templatere-rerence/templatere-rerence.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { ParentComponentComponent } from './ComponentInteration/parent-component/parent-component.component';
import { ChildComponentComponent } from './ComponentInteration/child-component/child-component.component';
import { PipeComponent } from './pipe/pipe.component';
import { PlayerComponent } from './service/player/player.component';
import { PlayerService } from './service/player.service';


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
    TemplatereRerenceComponent,
    TwowayBindingComponent,
    IfDirectiveComponent,
    SwitchDirectiveComponent,
    ForDirectiveComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    PipeComponent,
    PlayerComponent,
    
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
