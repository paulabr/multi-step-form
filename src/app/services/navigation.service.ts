import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  constructor(private router: Router) {}

  personalInfo = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern("[- +()0-9]+"),
    ]),
  });

  nextStep() {
    if (this.personalInfo.valid) {
      this.router.navigate(["/plan"]);
    } else {
      const invalidControls = this.findInvalidControls();
      for (const control of invalidControls) {
        if (control.errors.required) {
          control.setErrors({ empty: true });
        }
        if (control.errors.pattern) {
          control.setErrors({ format: true });
        }
      }
    }
  }

  private findInvalidControls() {
    const invalid = [];
    const controls = this.personalInfo.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(controls[name]);
      }
    }
    return invalid;
  }
}
