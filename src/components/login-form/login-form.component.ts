import { Component, EventEmitter, Output } from "@angular/core";
import { NavController } from "ionic-angular";
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";
import { AuthService } from "../../providers/auth/auth.service";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(
    private auth: AuthService,
    private navCtrl: NavController) {
      this.loginStatus = new EventEmitter<LoginResponse>();
  }

  navigateToRegisterPage() {
      this.navCtrl.push('RegisterPage');
  }

  async login() {
    const result = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
  }
}
