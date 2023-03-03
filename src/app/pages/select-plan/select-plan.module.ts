import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { SelectPlanRoutingModule } from "./select-plan-routing.module";
import { SelectPlanViewComponent } from "./select-plan-view/select-plan-view.component";

@NgModule({
  declarations: [SelectPlanViewComponent],
  imports: [CommonModule, SelectPlanRoutingModule, ReactiveFormsModule],
})
export class SelectPlanModule {}
