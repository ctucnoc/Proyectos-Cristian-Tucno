import { Component, OnInit } from '@angular/core';
import { ProviderFormsService } from 'src/app/shared/forms/provider-forms.service';
import { MatDialogRef } from '@angular/material/dialog';
import { BProviderClient } from '../../models/bprovider-client';
import { ProdiverClientService } from '../../servicies/prodiver-client.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  bProvider_Cliente: BProviderClient;
  constructor(
    public providerForm: ProviderFormsService,
    public dialoRef: MatDialogRef<AddProviderComponent>,
    private providerClienteService: ProdiverClientService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }
  onClose() {
    this.providerForm.form.reset();
    this.providerForm.initializeFormGroup();
    this.dialoRef.close();
  }

  onCreate() {
    if (this.providerForm.form.valid) {
      if (!this.providerForm.form.get('provider_client_id').value) {
        this.onInsert();
      } else {
        this.onUpdate();
      }
    }
  }
  onInsert() {
    this.bProvider_Cliente = new BProviderClient();
    this.bProvider_Cliente.provider_client_id = this.providerForm.form.value.provider_client_id;
    this.bProvider_Cliente.provider_client_name = this.providerForm.form.value.provider_client_name;
    this.bProvider_Cliente.provider_client_document_type = this.providerForm.form.value.provider_client_document_type;
    this.bProvider_Cliente.prodiver_client_document_number = this.providerForm.form.value.prodiver_client_document_number;
    this.bProvider_Cliente.provider_client_type = this.providerForm.form.value.provider_client_type;
    this.bProvider_Cliente.provider_client_address = this.providerForm.form.value.provider_client_address;
    this.bProvider_Cliente.provider_client_phone = this.providerForm.form.value.provider_client_phone;
    this.bProvider_Cliente.prodiver_client_email = this.providerForm.form.value.prodiver_client_email;
    this.bProvider_Cliente.prodiver_client_web = this.providerForm.form.value.prodiver_client_web;
    this.providerClienteService.add(this.bProvider_Cliente).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.onClose();
    });
  }

  onUpdate(){
    this.bProvider_Cliente = new BProviderClient();
    this.bProvider_Cliente.provider_client_id = this.providerForm.form.value.provider_client_id;
    this.bProvider_Cliente.provider_client_name = this.providerForm.form.value.provider_client_name;
    this.bProvider_Cliente.provider_client_document_type = this.providerForm.form.value.provider_client_document_type;
    this.bProvider_Cliente.prodiver_client_document_number = this.providerForm.form.value.prodiver_client_document_number;
    this.bProvider_Cliente.provider_client_type = this.providerForm.form.value.provider_client_type;
    this.bProvider_Cliente.provider_client_address = this.providerForm.form.value.provider_client_address;
    this.bProvider_Cliente.provider_client_phone = this.providerForm.form.value.provider_client_phone;
    this.bProvider_Cliente.prodiver_client_email = this.providerForm.form.value.prodiver_client_email;
    this.bProvider_Cliente.prodiver_client_web = this.providerForm.form.value.prodiver_client_web;
    this.providerClienteService.update(this.bProvider_Cliente).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.onClose();
    });
  }
}

