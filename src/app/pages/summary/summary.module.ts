import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SummaryRoutingModule } from "./summary-routing.module";
import { SummaryViewComponent } from "./summary-view/summary-view.component";

@NgModule({
  declarations: [SummaryViewComponent],
  imports: [CommonModule, SummaryRoutingModule],
})
export class SummaryModule {}
