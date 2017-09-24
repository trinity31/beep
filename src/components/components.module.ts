import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginPage } from "../pages/login/login";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ]
})

export class ComponentsModule {

}
