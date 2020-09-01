import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CategoryService } from '../../servicies/category.service';
import { ProductFormService } from 'src/app/shared/forms/product-form.service';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['CATEGORIA'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  constructor(
    public dialoRef: MatDialogRef<SearchCategoryComponent>,
    private categoryService: CategoryService,
    public productForm: ProductFormService
  ) { }
  ngOnInit(): void {
  }
  onClose() {
    this.dialoRef.close();
  }

  onSearch(events) {
    this.categoryService.search(this.searchKey).subscribe(data => {
      console.log(data.length);
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onLoadCategory(row) {
    this.productForm.dataFormCategory(row);
    this.onClose();
  }

}
