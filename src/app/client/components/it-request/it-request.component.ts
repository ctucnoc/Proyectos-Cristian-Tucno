import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RequestService } from '../../servicies/request.service';
import { BRequest } from '../../models/brequest';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialog/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-it-request',
  templateUrl: './it-request.component.html',
  styleUrls: ['./it-request.component.css']
})
export class ItRequestComponent implements OnInit {

  id: number;
  bRequest: BRequest;
  displayedColumns: string[] = ['CÓDIGO DETALLE SOLICITUD', 'PRODUCTO','CANTIDAD SOLICITADA'];
  constructor(
    private router: ActivatedRoute,
    private requestService: RequestService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params.id;
      this.onFindByRequestId(this.id);
    });
  }
  onFindByRequestId(id) {
    this.requestService.findByRequestId(id).subscribe(data => {
      this.bRequest = data;
    });
  }

  onupdate(id: number) {

    this.dialog
      .open(DialogConfirmationComponent, {
        data: `¿Esta seguro que realizar la Transferencia?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.requestService.update(id).subscribe(data => {
            this.notificationService.success(':: Envio Satisfactorio ' + data.message);
          });
        }
      });
  }

}
