import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NavigationService } from "src/app/services/navigation.service";
enum Type {
  Arcade = "arcade",
  Advanced = "advanced",
  Pro = "pro",
}

enum Price {
  Arcade = 9,
  Advanced = 12,
  Pro = 15,
}
@Component({
  selector: "app-select-plan-view",
  templateUrl: "./select-plan-view.component.html",
  styleUrls: ["./select-plan-view.component.scss"],
})
export class SelectPlanViewComponent implements OnInit {
  plan: FormGroup;
  type = Type;
  price = Price;
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

  choosePlan(planType: Type, price: Price, id: string) {
    this.selectCard(id);
    this.planType.patchValue(planType);
    this.planPrice.patchValue(price);
  }

  private selectCard(id: string) {
    const cards = document.getElementsByClassName("card plan-card");
    Array.from(cards).forEach((card) => {
      card.classList.remove("selected-card");
    });
    document.getElementById(id).classList.add("selected-card");
  }

  goToAddOns() {
    this.navigationService.navigateToAddOns();
  }
}
