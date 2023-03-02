import { Component } from "@angular/core";
import { Router } from "@angular/router";
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
  routes = Routes;
  constructor(public router: Router) {}
}
