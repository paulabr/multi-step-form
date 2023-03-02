import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { NavbarMobileModule } from "./navbar-mobile/navbar-mobile.module";
import { NavbarModule } from "./navbar/navbar.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, NavbarModule, NavbarMobileModule],
})
export class LayoutModule {}
