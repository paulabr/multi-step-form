import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { AddOnPickerModule } from "src/app/components/add-on-picker/add-on-picker.module";
import { AddOnsRoutingModule } from "./add-ons-routing.module";
import { AddOnsViewComponent } from "./add-ons-view/add-ons-view.component";

@NgModule({
  declarations: [AddOnsViewComponent],
  imports: [
    CommonModule,
    AddOnsRoutingModule,
    ReactiveFormsModule,
    AddOnPickerModule,
  ],
})
export class AddOnsModule {}
