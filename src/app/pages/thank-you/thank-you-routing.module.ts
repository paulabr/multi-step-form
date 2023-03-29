import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThankYouViewComponent } from "./thank-you-view/thank-you-view.component";

const routes: Routes = [
  {
    path: "",
    component: ThankYouViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThankYouRoutingModule {}
