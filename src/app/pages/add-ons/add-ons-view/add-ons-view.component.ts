import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-add-ons-view",
  templateUrl: "./add-ons-view.component.html",
  styleUrls: ["./add-ons-view.component.scss"],
})
export class AddOnsViewComponent implements OnInit {
  addOns: FormArray;
  constructor(private navigationService: NavigationService) {}
  ngOnInit(): void {
    this.addOns = this.navigationService.addOns;
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
    options.forEach((option) => {
      this.addOns.push(
        new FormGroup({
          addOn: new FormControl(option.element),
          price: new FormControl(parseInt(option.price.replace(/[^0-9]/g, ""))),
        })
      );
    });
    this.navigationService.navigateToSummary();
  }
}
