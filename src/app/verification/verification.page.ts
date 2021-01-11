import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { LoadingController, NavController } from "@ionic/angular";

@Component({
  selector: "app-verification",
  templateUrl: "./verification.page.html",
  styleUrls: ["./verification.page.scss"],
})
export class VerificationPage implements OnInit {
  form_detail: any;
  selectedCountry: any;
  country_code: any;
  Message_sent_dialog: boolean = false;
  country_image: any;
  phoneNumber: any;
  otpEntered: boolean = false;
  textOne: any;
  textTwo: any;
  textThree: any;
  textFour: any;
  enteredOtp: any;
  constructor(
    private fb: FormBuilder,
    public loadingController: LoadingController
  ) {
    this.form_detail = this.fb.group({
      phone: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      selectedCountry: ["", Validators.compose([Validators.required])],
    });

    // if (this.form_detail.value.selectedCountry == 1) {
    this.country_code = "+1";
    this.country_image =
      "../../assets/united-states-of-america-flag-icon-64.png";
    // }
  }

  ngOnInit() {}

  getChange() {
    this.form_detail.value.selectedCountry;
    if (this.form_detail.value.selectedCountry == 1) {
      this.country_code = "+1";
      this.country_image = "";
      this.country_image =
        "../../assets/united-states-of-america-flag-icon-64.png";
    }
    if (this.form_detail.value.selectedCountry == 2) {
      this.country_code = "+91";
      this.country_image = "";
      this.country_image = "../../assets/india-flag-icon-64.png";
    }
  }

  sendOTP() {
    this.Message_sent_dialog = true;
    this.phoneNumber =
      this.country_code +
      " (" +
      this.form_detail.value.phone.slice(0, 3) +
      ")" +
      " " +
      this.form_detail.value.phone.slice(3, 6) +
      " " +
      this.form_detail.value.phone.slice(6, 11);
  }

  confirmDialog() {
    alert("successfully validated.");
  }

  otpController(event, next, prev) {
    this.enteredOtp =
      this.textOne + this.textTwo + this.textThree + this.textFour;

    if (this.enteredOtp.length == 4) {
      this.otpEntered = true;
    }

    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    } else if (next && event.target.value.length > 0) {
      next.setFocus();
    } else {
      return 0;
    }
  }

  onOtpChange(msg) {
    console.log(msg);
  }

  editNumber() {
    this.Message_sent_dialog = false;
    this.form_detail.reset({
      phone: "",
      selectedCountry: "",
    });
  }

  resendSMS() {
    this.textOne = "";
    this.textTwo = "";
    this.textThree = "";
    this.textFour = "";

    this.otpEntered = false;
  }
}
