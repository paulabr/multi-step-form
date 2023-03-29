import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PagesRoutingModule } from "./pages-routing.module";
import { ThankYouViewComponent } from "./thank-you/thank-you-view/thank-you-view.component";

@NgModule({
  declarations: [ThankYouViewComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
