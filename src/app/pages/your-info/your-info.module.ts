import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { YourInfoRoutingModule } from "./your-info-routing.module";
import { YourInfoViewComponent } from "./your-info-view/your-info-view.component";

@NgModule({
  declarations: [YourInfoViewComponent],
  imports: [CommonModule, YourInfoRoutingModule, ReactiveFormsModule],
})
export class YourInfoModule {}
