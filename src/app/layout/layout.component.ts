import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  isMobile = false;
  constructor() {}

  getElementWidth() {
    if (document.getElementById("navbar")?.clientWidth > 850) {
      console.log(document.getElementById("navbar")?.clientWidth > 850);
      return true;
    }
    return false;
  }

  ngOnInit(): void {}
}
