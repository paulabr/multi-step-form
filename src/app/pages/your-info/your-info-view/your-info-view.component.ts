import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-your-info-view",
  templateUrl: "./your-info-view.component.html",
  styleUrls: ["./your-info-view.component.scss"],
})
export class YourInfoViewComponent implements OnInit {
  invalidForm = false;
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

  get name(): FormControl {
    return this.personalInfo.get("name") as FormControl;
  }

  get email(): FormControl {
    return this.personalInfo.get("email") as FormControl;
  }

  get phone(): FormControl {
    return this.personalInfo.get("phone") as FormControl;
  }

  ngOnInit(): void {
    this.personalInfo.valueChanges.subscribe((val) => {
      if (val) {
        this.invalidForm = false;
      }
    });
  }

  goToPlan() {
    if (this.personalInfo.valid) {
      this.router.navigate(["/plan"]);
    } else {
      this.invalidForm = true;
    }
  }
}
