import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-your-info-view",
  templateUrl: "./your-info-view.component.html",
  styleUrls: ["./your-info-view.component.scss"],
})
export class YourInfoViewComponent {
  personalInfo = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern("[- +()0-9]+"),
    ]),
  });
}
