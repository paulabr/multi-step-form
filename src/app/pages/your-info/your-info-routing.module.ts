import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { YourInfoViewComponent } from "./your-info-view/your-info-view.component";

const routes: Routes = [
  {
    path: "",
    component: YourInfoViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourInfoRoutingModule {}
