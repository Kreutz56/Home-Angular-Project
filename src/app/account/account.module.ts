import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccountAppComponent } from "./account.app.component";
import { AccountRouterModule } from "./account.route";
import { AccountService } from "./services/account.service";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
  declarations: [
    AccountAppComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AccountRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AccountService
  ]
})

export class AccountModule {}