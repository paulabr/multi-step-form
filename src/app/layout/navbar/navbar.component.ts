import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationService } from "src/app/services/navigation.service";
export enum Routes {
  info = "/info",
  plan = "/plan",
  addons = "/add-ons",
  summary = "/summary",
}
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  isDisabled = !this.navigationService.personalInfo.valid;
  routes = Routes;
  constructor(
    public router: Router,
    public navigationService: NavigationService
  ) {}

  goToPlan() {
    this.navigationService.navigateToPlan();
  }
}
