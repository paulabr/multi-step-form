import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SelectPlanViewComponent } from "./select-plan-view/select-plan-view.component";

const routes: Routes = [
  {
    path: "",
    component: SelectPlanViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPlanRoutingModule {}
