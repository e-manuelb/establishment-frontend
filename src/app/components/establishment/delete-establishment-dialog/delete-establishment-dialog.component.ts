import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {DeleteEstablishmentService} from "../../../services/establishment/delete-establishment.service";

@Component({
  selector: 'app-delete-establishment-dialog',
  templateUrl: './delete-establishment-dialog.component.html',
  styleUrls: ['./delete-establishment-dialog.component.scss']
})
export class DeleteEstablishmentDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private deleteEstablishmentService: DeleteEstablishmentService, private toaster: ToastrService) {
  }

  public deleteEstablishmentById(id: number) {
    this.deleteEstablishmentService.perform(id).subscribe({
      next: () => {
        this.toaster.success("Empresa deletada com sucesso!");
      }
    });
  }
}
