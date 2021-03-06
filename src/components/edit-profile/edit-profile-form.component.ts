import { Component, Output, EventEmitter } from "@angular/core";
import { Profile } from "../../models/profile/profile.interface";
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';

/**
 * Generated class for the EditProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})

export class EditProfileFormComponent {
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  profile = {} as Profile;

  constructor(private auth: AuthService, private data: DataService) {
    //this.authenticatedUser$ -> Observable
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().
      subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  async saveProfile() {
    if(this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser,
                      this.profile);
      //console.log(result);
      this.saveProfileResult.emit(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }
}
