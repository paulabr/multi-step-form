import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "info",
    loadChildren: () =>
      import("./your-info/your-info.module").then((m) => m.YourInfoModule),
  },
  {
    path: "plan",
    loadChildren: () =>
      import("./select-plan/select-plan.module").then(
        (m) => m.SelectPlanModule
      ),
  },
  {
    path: "add-ons",
    loadChildren: () =>
      import("./add-ons/add-ons.module").then((m) => m.AddOnsModule),
  },
  {
    path: "summary",
    loadChildren: () =>
      import("./summary/summary.module").then((m) => m.SummaryModule),
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
