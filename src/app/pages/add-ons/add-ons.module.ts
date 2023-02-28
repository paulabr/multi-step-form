import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOnsRoutingModule } from './add-ons-routing.module';
import { AddOnsViewComponent } from './add-ons-view/add-ons-view.component';


@NgModule({
  declarations: [
    AddOnsViewComponent
  ],
  imports: [
    CommonModule,
    AddOnsRoutingModule
  ]
})
export class AddOnsModule { }
