import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { AddOnsRoutingModule } from "./add-ons-routing.module";
import { AddOnsViewComponent } from "./add-ons-view/add-ons-view.component";

@NgModule({
  declarations: [AddOnsViewComponent],
  imports: [CommonModule, AddOnsRoutingModule, ReactiveFormsModule],
})
export class AddOnsModule {}
