import { Component, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { NavigationService } from "src/app/services/navigation.service";

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
  constructor(private navigationService: NavigationService) {}

  get plan(): FormGroup {
    return this.navigationService.allSteps.get("plan") as FormGroup;
  }

  get addOns(): FormArray {
    return this.navigationService.allSteps.get("addOns") as FormArray;
  }

  ngOnInit(): void {
    this.planType = this.plan.get("planType").value;
    this.planPrice = this.plan.get("planPrice").value;
    this.yearlyPlan = this.plan.get("yearlyPlan").value;
    this.totalPrice = this.getTotalPrice();
  }

  getTotalPrice(): number {
    const totalAddOnsPrice = this.addOns.value
      .map((addOn) => addOn.price)
      .reduce((sum, el) => {
        return sum + el;
      });
    return totalAddOnsPrice + this.planPrice;
  }
}
