import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "./card/card.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, CardModule],
  exports: [CardModule],
})
export class ComponentsModule {}
