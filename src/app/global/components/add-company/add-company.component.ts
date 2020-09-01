import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MultiCompanyFormsService } from 'src/app/shared/forms/multi-company-forms.service';
import { MultiCompanyService } from 'src/app/client/servicies/multi-company.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BMultiCompany } from 'src/app/client/models/bmulti-company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  action:string;
  bMulti_Company: BMultiCompany;
  constructor(
    public dialoRef: MatDialogRef<AddCompanyComponent>,
    public companyForm: MultiCompanyFormsService,
    private multiCompanyService: MultiCompanyService,
    private notificationService: NotificationService
  ) { }

  onClose() {
    this.dialoRef.close({event:this.action,multi_company_name:this.companyForm.form.value.multi_company_name});
  }
  onSubmit() {
    if (this.companyForm.form.valid) {
      if (!this.companyForm.form.get('multi_company_id').value) {
        this.onInsertMultiCompany();
      } else {
        this.onUpdate();
      }
    }
  }

  onInsertMultiCompany() {
    this.bMulti_Company = new BMultiCompany();
    this.bMulti_Company.multi_company_address = this.companyForm.form.value.multi_company_address;
    this.bMulti_Company.multi_company_email = this.companyForm.form.value.multi_company_email;
    this.bMulti_Company.multi_company_name = this.companyForm.form.value.multi_company_name;
    this.bMulti_Company.multi_company_phone = this.companyForm.form.value.multi_company_phone;
    this.bMulti_Company.multi_company_representative = this.companyForm.form.value.multi_company_representative;
    this.bMulti_Company.multi_company_ruc = this.companyForm.form.value.multi_company_ruc;
    this.bMulti_Company.multi_company_type = this.companyForm.form.value.multi_company_type;
    console.log(this.bMulti_Company);
    this.multiCompanyService.add(this.bMulti_Company).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.action='ADD';
      this.onClose();
    });
  }
  onUpdate() {
    this.bMulti_Company = new BMultiCompany();
    this.bMulti_Company.multi_company_id = this.companyForm.form.value.multi_company_id;
    this.bMulti_Company.multi_company_address = this.companyForm.form.value.multi_company_address;
    this.bMulti_Company.multi_company_email = this.companyForm.form.value.multi_company_email;
    this.bMulti_Company.multi_company_name = this.companyForm.form.value.multi_company_name;
    this.bMulti_Company.multi_company_phone = this.companyForm.form.value.multi_company_phone;
    this.bMulti_Company.multi_company_representative = this.companyForm.form.value.multi_company_representative;
    this.bMulti_Company.multi_company_ruc = this.companyForm.form.value.multi_company_ruc;
    this.bMulti_Company.multi_company_type = this.companyForm.form.value.multi_company_type;
    console.log(this.bMulti_Company);
    this.multiCompanyService.update(this.bMulti_Company).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.action='UPDATE';
      this.onClose();
    });
  }
}
