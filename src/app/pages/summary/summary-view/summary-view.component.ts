import { Component, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { NavigationService } from "src/app/services/navigation.service";
import { AddOnNamesValues } from "../../add-ons/add-ons-util/add-on-names";
import {
  AddOnPrices,
  AddOnPricesYearly,
} from "../../add-ons/add-ons-util/add-on-prices";
import { PlanPrice } from "../../select-plan/plan-price.enum";

@Component({
  selector: "app-summary-view",
  templateUrl: "./summary-view.component.html",
  styleUrls: ["./summary-view.component.scss"],
})
export class SummaryViewComponent implements OnInit {
  planType: string;
  planPrice: number;
  yearlyPlan: boolean;
  totalPrice: number;
  additionalItemNames = [];
  additionalItemPrices = [];
  addOnNames = AddOnNamesValues;
  addOnPrices = AddOnPrices;
  addOnPricesYearly = AddOnPricesYearly;
  constructor(private navigationService: NavigationService) {}

  get plan(): FormGroup {
    return this.navigationService.allSteps.get("plan") as FormGroup;
  }

  get addOns(): FormArray {
    return this.navigationService.allSteps.get("addOns") as FormArray;
  }

  ngOnInit(): void {
    this.yearlyPlan = this.plan.get("yearlyPlan").value;
    this.additionalItemNames = this.getAdditionalItemNames(this.addOns.value);
    this.additionalItemPrices = this.getAdditionalItemPrices();
    this.planType = this.plan.get("planType").value;
    this.planPrice = this.yearlyPlan
      ? PlanPrice[`${this.planType}Yearly`]
      : PlanPrice[this.planType];
    this.totalPrice = this.getTotalPrice();
  }

  private getAdditionalItemNames(addOns: boolean[]) {
    return addOns
      .map((addOn: boolean, i: number) => {
        if (addOn) {
          return this.addOnNames[i];
        }
      })
      .filter((el) => el);
  }

  private getAdditionalItemPrices() {
    return this.addOns.value
      .map((addOn: boolean, i: number) => {
        if (addOn) {
          if (this.yearlyPlan) {
            return this.addOnPricesYearly[i];
          }
          return this.addOnPrices[i];
        }
      })
      .filter((el) => el);
  }

  getTotalPrice(): number {
    return (
      this.additionalItemPrices.reduce((sum, el) => {
        return sum + el;
      }) + this.planPrice
    );
  }
}
