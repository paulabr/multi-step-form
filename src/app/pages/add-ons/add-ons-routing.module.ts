import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddOnsViewComponent } from "./add-ons-view/add-ons-view.component";

const routes: Routes = [
  {
    path: "",
    component: AddOnsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOnsRoutingModule {}
