import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouteGuardService } from "../services/route-guard.service";

const routes: Routes = [
  {
    path: "info",
    loadChildren: () =>
      import("./your-info/your-info.module").then((m) => m.YourInfoModule),
  },
  {
    path: "plan",
    canActivate: [RouteGuardService],
    loadChildren: () =>
      import("./select-plan/select-plan.module").then(
        (m) => m.SelectPlanModule
      ),
  },
  {
    path: "add-ons",
    canActivate: [RouteGuardService],
    loadChildren: () =>
      import("./add-ons/add-ons.module").then((m) => m.AddOnsModule),
  },
  {
    path: "summary",
    canActivate: [RouteGuardService],
    loadChildren: () =>
      import("./summary/summary.module").then((m) => m.SummaryModule),
  },
  {
    path: "thank-you",
    // canActivate: [RouteGuardService],
    loadChildren: () =>
      import("./thank-you/thank-you-routing.module").then(
        (m) => m.ThankYouRoutingModule
      ),
  },
  { path: "**", redirectTo: "not-found" },
  {
    path: "not-found",
    loadChildren: () =>
      import("./not-found/not-found.module").then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
