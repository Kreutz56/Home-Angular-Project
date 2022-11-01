import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccountAppComponent } from "./account.app.component";
import { AccountRouterModule } from "./account.route";
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
    AccountRouterModule
  ]
})

export class AccountModule {}