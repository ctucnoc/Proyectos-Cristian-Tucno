import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserCreation } from '../../models/user-creation';
import { UserCreationService } from '../../servicies/user-creation.service';
import { BUserMultiCompany } from '../../models/buser-multi-company';
import { UserCompanyService } from '../../servicies/user-company.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BMultiCompany } from 'src/app/client/models/bmulti-company';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  action: string;
  userCompany: BUserMultiCompany;
  bMulti_company: BMultiCompany;
  user: UserCreation;
  searchKey: string;
  displayedColumns: string[] = ['USUARIO'];
  listData: UserCreation[] = [];
  constructor(
    public dialoRef: MatDialogRef<SearchUserComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private userCreationService: UserCreationService,
    private userCompanyService: UserCompanyService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialoRef.close({ event: this.action, id: this.id });
  }

  onSearch(event) {
    event.preventDefault();
    this.userCreationService.list(this.searchKey).subscribe(data => {
      this.listData = data;
    });
  }

  onLoadUser(row) {
    if (this.id != null) {
      this.userCompany = new BUserMultiCompany();
      this.bMulti_company = new BMultiCompany();
      this.user = new UserCreation();
      this.user.user_id = row.user_id;
      this.bMulti_company.multi_company_id = this.id;
      this.userCompany.user = this.user;
      this.userCompany.multi_Company = this.bMulti_company;
      this.userCompanyService.add(this.userCompany).subscribe(data => {
        this.notificationService.success(data.message);
        this.action = 'ADD';
        this.onClose();
      });
    }
  }

}
