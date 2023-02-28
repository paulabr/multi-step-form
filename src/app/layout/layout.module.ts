import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { NavbarModule } from "./navbar/navbar.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, NavbarModule],
})
export class LayoutModule {}
