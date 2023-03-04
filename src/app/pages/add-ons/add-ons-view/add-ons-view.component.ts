import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-add-ons-view",
  templateUrl: "./add-ons-view.component.html",
  styleUrls: ["./add-ons-view.component.scss"],
})
export class AddOnsViewComponent implements OnInit {
  allSteps: FormGroup;

  get addOns(): FormArray {
    return this.navigationService.allSteps.get("addOns") as FormArray;
  }
  constructor(private navigationService: NavigationService) {}
  ngOnInit(): void {
    this.allSteps = this.navigationService.allSteps;
  }

  goToSummary() {
    const checkboxes = Array.from(
      document.getElementsByClassName("form-check-input")
    );
    const options = checkboxes
      .filter((checkbox: HTMLInputElement) => checkbox.checked)
      .map((el: HTMLInputElement) => {
        return {
          element: el.value,
          price: el.labels[0].textContent,
        };
      });
    const optionValues: FormArray = new FormArray([
      ...options.map(
        (item) =>
          new FormGroup({
            addOn: new FormControl(item.element),
            price: new FormControl(parseInt(item.price.replace(/[^0-9]/g, ""))),
          })
      ),
    ]);
    debugger;
    this.allSteps.setControl("addOns", optionValues);
    this.navigationService.navigateToSummary();
  }
}
