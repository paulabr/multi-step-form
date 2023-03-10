import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NavigationService } from "src/app/services/navigation.service";
import { CardImage } from "../card-image.enum";
import { PlanName } from "../plan-name.enum";
import { PlanPrice } from "../plan-price.enum";

@Component({
  selector: "app-select-plan-view",
  templateUrl: "./select-plan-view.component.html",
  styleUrls: ["./select-plan-view.component.scss"],
})
export class SelectPlanViewComponent implements OnInit {
  plan: FormGroup;
  planNames = PlanName;
  price = PlanPrice;
  imageSrc = CardImage;
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.plan = this.navigationService.plan;
  }

  get planType(): FormControl {
    return this.plan.get("planType") as FormControl;
  }

  get planPrice(): FormControl {
    return this.plan.get("planPrice") as FormControl;
  }

  get yearlyPlan(): FormControl {
    return this.plan.get("yearlyPlan") as FormControl;
  }

  goToAddOns() {
    this.navigationService.navigateToAddOns();
  }
}
