import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectPlanRoutingModule } from './select-plan-routing.module';
import { SelectPlanViewComponent } from './select-plan-view/select-plan-view.component';


@NgModule({
  declarations: [
    SelectPlanViewComponent
  ],
  imports: [
    CommonModule,
    SelectPlanRoutingModule
  ]
})
export class SelectPlanModule { }
