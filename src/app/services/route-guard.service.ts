import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { NavigationService } from "./navigation.service";

@Injectable({
  providedIn: "root",
})
export class RouteGuardService implements CanActivate {
  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (this.navigationService.allSteps.get("personalInfo").valid) {
      return true;
    }
    // this.router.navigate(["/info"]);
    // return false;
    return true;
  }
}
