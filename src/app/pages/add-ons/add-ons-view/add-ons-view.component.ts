import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { NavigationService } from "src/app/services/navigation.service";
import { AddOnDescriptions } from "../add-on-descriptions";
import { AddOnNamesValues } from "../add-on-names";
import { AddOnPrices, AddOnPricesYearly } from "../add-ons-util/add-on-prices";

@Component({
  selector: "app-add-ons-view",
  templateUrl: "./add-ons-view.component.html",
  styleUrls: ["./add-ons-view.component.scss"],
})
export class AddOnsViewComponent {
  addOnNames = AddOnNamesValues;
  addOnDescriptions = AddOnDescriptions;
  prices = AddOnPrices;
  yearlyPrices = AddOnPricesYearly;
  addOnsArray: FormArray;

  get allSteps(): FormGroup {
    return this.navigationService.allSteps as FormGroup;
  }

  get addOns(): FormArray {
    return this.navigationService.allSteps.get("addOns") as FormArray;
  }

  get yearlyPlan(): FormControl {
    return this.navigationService.plan.get("yearlyPlan") as FormControl;
  }
  constructor(private navigationService: NavigationService) {}

  goToSummary() {
    this.navigationService.navigateToSummary();
  }
}
