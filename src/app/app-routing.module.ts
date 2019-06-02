import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { SampleLoopComponent } from './Test/sample-loop/sample-loop.component';
import { OnChangesParentComponent } from './life-hock-test/life-hock-test.component';
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
import { PipeComponent } from './pipe/pipe.component';
import { PlayerComponent } from './service/player/player.component';

const routes: Routes = [
  {path:'Employee',component:EmployeeComponent},
  {path:'SampleLoop',component:SampleLoopComponent},
  {path:'LifeHoockTest',component:OnChangesParentComponent},
  {path:'Interpolitiontest',component:InterpolitiontestComponent},
  {path:'PropertyBindingtest',component:ProperbindingtestComponent},
  {path:'ClassBindingtest',component:ClassbindingtestComponent},
  {path:'EventBindingtest',component:EventbindingtestComponent},
  {path:'TemplateReferencetest',component:TemplatereRerenceComponent},
  {path:'TwowayBindingtest',component:TwowayBindingComponent},
  {path:'IfDirectivetest',component:IfDirectiveComponent},
  {path:'SwitchDirectivetest',component:SwitchDirectiveComponent},
  {path:'ForDirectivetest',component:ForDirectiveComponent},
  {path:'ComponentInterationTest',component:ParentComponentComponent},
  {path:'PipeTest',component:PipeComponent},
  {path:'ServiceTest',component:PlayerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
