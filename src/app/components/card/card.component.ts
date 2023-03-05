import { Component, Input } from "@angular/core";
import { CardImage } from "src/app/components/card/card-image.enum";
import { PlanName } from "src/app/pages/select-plan/plan-name.enum";
import { PlanPrice } from "src/app/pages/select-plan/plan-price.enum";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() planName: PlanName;
  @Input() planPrice: PlanPrice;
  @Input() imageSrc: CardImage;
  @Input() isYearlyPlan: boolean;
}
