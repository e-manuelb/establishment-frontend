import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {DeleteRegistrationByIdService} from "../../../services/registration/delete-registration-by-id.service";

@Component({
  selector: 'app-delete-registration-dialog',
  templateUrl: './delete-registration-dialog.component.html',
  styleUrls: ['./delete-registration-dialog.component.scss']
})
export class DeleteRegistrationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private deleteRegistrationByIdService: DeleteRegistrationByIdService, private toaster: ToastrService) {
  }

  public deleteRegistrationById(id: number) {
    this.deleteRegistrationByIdService.perform(id).subscribe({
      next: () => {
        this.toaster.success("Matrícula deletada com sucesso!");
      }
    })
  }
}
