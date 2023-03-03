import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-add-ons-view",
  templateUrl: "./add-ons-view.component.html",
  styleUrls: ["./add-ons-view.component.scss"],
})
export class AddOnsViewComponent implements OnInit {
  addOns: FormControl;
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
        return el.value;
      });
    this.addOns.setValue(options);
    this.navigationService.navigateToSummary();
  }
}
