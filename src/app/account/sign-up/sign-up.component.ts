import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "../models/user";
import { AccountService } from "../services/account.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})

export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  addAccount() {
    if (this.signUpForm.dirty && this.signUpForm.valid) {
      this.user = Object.assign({}, this.user, this.signUpForm.value)

      this.accountService
        .registerUser(this.user)
        .subscribe(
          success => { this.processSuccess(success) },
          fail => { this.processFail(fail) }
        )
    }
  }

  processSuccess(success: User) {
  }

  processFail(fail: any) {
  }
}