import { Component, EventEmitter, Output } from "@angular/core";
import { NavController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";

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
    private navCtrl: NavController,
    private afAuth: AngularFireAuth) {
      this.loginStatus = new EventEmitter<LoginResponse>();
  }

  navigateToRegisterPage() {
      this.navCtrl.push('RegisterPage');
  }

  async login() {
    try {
      const result: LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
     // console.log(result);
        this.loginStatus.emit(result);
    } catch(e) {
     // console.error(e);
      const error: LoginResponse = {
        error: e
      }
     // console.log(error);
     this.loginStatus.emit(error);
    }
  }

}
