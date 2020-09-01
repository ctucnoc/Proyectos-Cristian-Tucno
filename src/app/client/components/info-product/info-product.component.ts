import { Component, OnInit } from '@angular/core';
import { ImgProductFormService } from 'src/app/shared/forms/img-product-form.service';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {

  constructor(public imgProductForm:ImgProductFormService) { }

  ngOnInit(): void {
  }
  processFile(event:any){ 
    
  }
  onUpload(){ }

}
