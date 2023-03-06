import { Component, Input } from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { CardImage } from "src/app/pages/select-plan/card-image.enum";
import { PlanName } from "src/app/pages/select-plan/plan-name.enum";
import { PlanPrice } from "src/app/pages/select-plan/plan-price.enum";

@Component({
  selector: "app-card",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CardComponent,
      multi: true,
    },
  ],
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements ControlValueAccessor {
  @Input() planName: PlanName;
  @Input() imageSrc: CardImage;
  @Input() plan: FormGroup;

  selected!: string;
  private onChanged!: Function;
  private onTouched!: Function;
  private disabled = false;
  price = PlanPrice;

  get planType(): FormControl {
    return this.plan.get("planType") as FormControl;
  }
  get yearlyPlan(): FormControl {
    return this.plan.get("yearlyPlan") as FormControl;
  }

  writeValue(value: any): void {
    this.selected = value;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  selectCard(planName: PlanName) {
    this.onTouched();
    this.selected = planName;
    this.onChanged(planName);
  }

  isCardSelected() {
    if (this.planType.value.length > 0) {
      if (
        this.planType.value === this.selected &&
        this.selected === this.planName
      ) {
        return true;
      }
    }
    return false;
  }
}
