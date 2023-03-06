import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-add-on-picker",
  templateUrl: "./add-on-picker.component.html",
  styleUrls: ["./add-on-picker.component.scss"],
})
export class AddOnPickerComponent {
  @Input() yearlyPlan: boolean;
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() checked: FormControl;
}
