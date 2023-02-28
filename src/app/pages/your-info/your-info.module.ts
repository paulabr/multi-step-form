import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourInfoRoutingModule } from './your-info-routing.module';
import { YourInfoViewComponent } from './your-info-view/your-info-view.component';


@NgModule({
  declarations: [
    YourInfoViewComponent
  ],
  imports: [
    CommonModule,
    YourInfoRoutingModule
  ]
})
export class YourInfoModule { }
