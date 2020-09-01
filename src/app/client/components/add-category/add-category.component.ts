import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../servicies/category.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CategoryFormService } from 'src/app/shared/forms/category-form.service';
import { BCategory } from '../../models/bcategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  action: string;
  cate: BCategory;
  constructor(
    private categoryService: CategoryService,
    public dialoRef: MatDialogRef<AddCategoryComponent>,
    private notificationService: NotificationService,
    public categoryForm: CategoryFormService
  ) { }

  ngOnInit(): void {
  }
  onClear() {
    this.categoryForm.form.reset();
    this.categoryForm.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  onClose() {
    this.categoryForm.form.reset();
    this.categoryForm.initializeFormGroup();
    this.dialoRef.close({ event: this.action });
  }
  onCreate() {
    if (this.categoryForm.form.valid) {
      if (!this.categoryForm.form.get('$key').value) {
        this.insertCategory();
      } else {
        this.updateCategory();
      }
    }
  }

  insertCategory() {
    this.cate = new BCategory();
    this.cate.category_description = this.categoryForm.form.value.category_description;
    this.categoryService.add(this.cate).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.action = 'ADD';
      this.onClose();
    }
    );
  }
  updateCategory() {
    this.cate = new BCategory();
    this.cate.category_id = this.categoryForm.form.value.$key;
    alert(this.cate.category_id);
    this.cate.category_description = this.categoryForm.form.value.category_description;
    this.categoryService.update(this.cate).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.onClose();
    }
    );
  }

}
