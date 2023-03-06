import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AddOnPickerComponent } from "./add-on-picker.component";

@NgModule({
  declarations: [AddOnPickerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AddOnPickerComponent],
})
export class AddOnPickerModule {}
