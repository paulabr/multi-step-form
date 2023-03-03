import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  constructor(private router: Router) {}

  allSteps = new FormGroup({
    personalInfo: new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern("[- +()0-9]+"),
      ]),
    }),
    plan: new FormGroup({
      planType: new FormControl("", [Validators.required]),
      yearlyPlan: new FormControl(true),
    }),
    addOns: new FormControl([], [Validators.required]),
  });

  get personalInfo(): FormGroup {
    return this.allSteps.get("personalInfo") as FormGroup;
  }

  get plan(): FormGroup {
    return this.allSteps.get("plan") as FormGroup;
  }

  get addOns(): FormControl {
    return this.allSteps.get("addOns") as FormControl;
  }

  navigateToPlan() {
    if (this.personalInfo.valid) {
      this.router.navigate(["/plan"]);
    } else {
      const invalidControls = this.findInvalidControls(this.personalInfo);
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

  navigateToAddOns() {
    if (this.plan.valid) {
      this.router.navigate(["/add-ons"]);
    } else {
      const invalidControls = this.findInvalidControls(this.plan);
      for (const control of invalidControls) {
        if (control.errors.required) {
          control.setErrors({ empty: true });
        }
      }
    }
  }

  navigateToSummary() {
    if (this.addOns.valid) {
      this.router.navigate(["/summary"]);
    } else {
      this.addOns.setErrors({ empty: true });
    }
  }

  private findInvalidControls(subGroup: FormGroup) {
    const invalid = [];
    const controls = subGroup.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(controls[name]);
      }
    }
    return invalid;
  }
}
