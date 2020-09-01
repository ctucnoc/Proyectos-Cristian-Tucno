import { Component, OnInit, Inject } from '@angular/core';
import { UserCreationFormService } from 'src/app/shared/forms/user-creation-form.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserCreationService } from '../../servicies/user-creation.service';
import { UserCreation } from '../../models/user-creation';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  action: string;
  userCreation: UserCreation;
  constructor(
    public userCreationForm: UserCreationFormService,
    public dialoRef: MatDialogRef<AddUserComponent>,
    private userCreaterService: UserCreationService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public flag: boolean
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialoRef.close({ event: this.action, user_name: this.userCreationForm.form.value.user_name })
  }

  onCreate() {
    if (this.userCreationForm.form.valid) {
      if(this.flag){
        this.onInsertUser();
      }else{
        console.log(this.flag);
        this.onUpdateUser();
      }
    }
  }
  onInsertUser() {
    this.userCreation = new UserCreation();
    this.userCreation.user_id = this.userCreationForm.form.value.user_id;
    this.userCreation.user_name = this.userCreationForm.form.value.user_name;
    this.userCreation.user_privilege = this.userCreationForm.form.value.user_privilege;
    //this.userCreaterService.exits(this.userCreationForm.form.value.user_id).subscribe(data => {
      //console.log(data);
    //});
    this.userCreaterService.add(this.userCreation).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.action = 'ADD';
      this.onClose();
    });
  }

  onUpdateUser() {
    this.userCreation = new UserCreation();
    this.userCreation.user_id = this.userCreationForm.form.value.user_id;
    this.userCreation.user_name = this.userCreationForm.form.value.user_name;
    this.userCreation.user_privilege = this.userCreationForm.form.value.user_privilege;
    this.userCreaterService.update(this.userCreation).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.action = 'UPDATE';
      this.onClose();
    });
  }

}
