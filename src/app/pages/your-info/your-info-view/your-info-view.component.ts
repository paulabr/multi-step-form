import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-your-info-view",
  templateUrl: "./your-info-view.component.html",
  styleUrls: ["./your-info-view.component.scss"],
})
export class YourInfoViewComponent implements OnInit {
  personalInfo: FormGroup;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.personalInfo = this.navigationService.personalInfo;
  }

  get name(): FormControl {
    return this.personalInfo.get("name") as FormControl;
  }

  get email(): FormControl {
    return this.personalInfo.get("email") as FormControl;
  }

  get phone(): FormControl {
    return this.personalInfo.get("phone") as FormControl;
  }

  goToPlan() {
    this.navigationService.nextStep();
  }
}
