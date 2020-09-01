import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FileUploadFormService } from 'src/app/shared/forms/file-upload-form.service';
import { ProductImgService } from '../../servicies/product-img.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ImgProductFormService } from 'src/app/shared/forms/img-product-form.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Imagen } from '../../models/imagen';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.css']
})
export class ListImageComponent implements OnInit {
  @ViewChild('imagenInputFile', { static: false }) imagenFile: ElementRef;

  listData: Imagen[];
  imagen: File;
  imagenMin: File;
  id: string;
  displayedColumns: string[] = ['CÓDIGO IMAGEN', 'NOMBRE IMAGEN', 'TAMAÑO IMAGEN', 'TIPO IMAGEN', 'SELECCIONE'];
  constructor(
    public imgProductForm: ImgProductFormService,
    public fileUploadForm: FileUploadFormService,
    private productImgService: ProductImgService,
    private notificationService: NotificationService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.onFindByBProduct(this.id);
  }

  onFileChange(event) {
    if (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/png" || event.target.files[0].type == "image/gif") {
      this.imagen = event.target.files[0];
      const fr = new FileReader();
      fr.onload = (evento: any) => {
        this.imagenMin = evento.target.result;
      };
      fr.readAsDataURL(this.imagen);
    } else {
      this.notificationService.warn('Seleccione una Imagen');
      this.imagen = null;
      this.onClear();
    }

  }

  onSubmit() {
    if (this.imagen != null || this.id != null) {
      this.productImgService.uploadFile(this.imagen, this.id).subscribe(data => {
        this.notificationService.success(':: Envio Satisfactorio ' + data.message);
        this.onFindByBProduct(this.id);
        this.onClear();
      }
      );
    } else {
      this.notificationService.warn('Imagen Vacio');
    }
  }
  onClear() {
    this.imagenFile.nativeElement.value = '';
    this.imagen = null;
  }

  onFindByBProduct(id: string) {
    this.productImgService.find(id).subscribe(data => {
      this.listData = data;
      console.log(this.listData);
    });
  }

  onDelete(id: number) {
    alert(id);
    this.productImgService.update(id).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.onFindByBProduct(this.id);
    });
  }

}
