import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VerificationPageRoutingModule } from "./verification-routing.module";

import { VerificationPage } from "./verification.page";
import { NgOtpInputModule } from "ng-otp-input";

@NgModule({
  imports: [
    NgOtpInputModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationPageRoutingModule,
  ],
  declarations: [VerificationPage],
})
export class VerificationPageModule {}
