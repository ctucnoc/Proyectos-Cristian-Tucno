import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProviderFormsService {

  constructor() { }

  form: FormGroup = new FormGroup({
    provider_client_id: new FormControl(null),
    provider_client_name: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
    provider_client_document_type: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    prodiver_client_document_number: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
    provider_client_type: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
    provider_client_address: new FormControl('',[Validators.maxLength(60)]),
    provider_client_phone: new FormControl('',[Validators.maxLength(11)]),
    prodiver_client_email: new FormControl('',[Validators.maxLength(60),Validators.email]),
    prodiver_client_web: new FormControl('',[Validators.maxLength(60)]),
  });
  initializeFormGroup() {
    this.form.setValue({
      provider_client_id: null,
      provider_client_name: '',
      provider_client_document_type: '',
      prodiver_client_document_number: '',
      provider_client_type: '',
      provider_client_address: '',
      provider_client_phone: '',
      prodiver_client_email: '',
      prodiver_client_web: '',
    });
  }

  populateForm(provider) {
    this.form.setValue({
      provider_client_id: provider.provider_client_id,
      provider_client_name: provider.provider_client_name,
      provider_client_document_type: provider.provider_client_document_type,
      prodiver_client_document_number: provider.prodiver_client_document_number,
      provider_client_type: provider.provider_client_type,
      provider_client_address: provider.provider_client_address,
      provider_client_phone: provider.provider_client_phone,
      prodiver_client_email: provider.prodiver_client_email,
      prodiver_client_web: provider.prodiver_client_web,
    });
  }
}
