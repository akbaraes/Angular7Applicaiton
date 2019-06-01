import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { SampleLoopComponent } from './Test/sample-loop/sample-loop.component';
import { OnChangesParentComponent } from './life-hock-test/life-hock-test.component';

const routes: Routes = [
  {path:'Employee',component:EmployeeComponent},
  {path:'SampleLoop',component:SampleLoopComponent},
  {path:'LifeHoockTest',component:OnChangesParentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
