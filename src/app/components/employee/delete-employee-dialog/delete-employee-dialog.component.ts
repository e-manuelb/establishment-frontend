import {Component, Inject} from '@angular/core';
import {DeleteEmployeeService} from "../../../services/employee/delete-employee.service";
import {ToastrService} from "ngx-toastr";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-employee-dialog',
  templateUrl: './delete-employee-dialog.component.html',
  styleUrls: ['./delete-employee-dialog.component.scss']
})
export class DeleteEmployeeDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private deleteEmployeeService: DeleteEmployeeService, private toaster: ToastrService) {
  }

  public deleteEmployeeById(id: number) {
    this.deleteEmployeeService.perform(id).subscribe({
      next: () => {
        this.toaster.success("Usuário deletado com sucesso!");
      }
    });
  }
}
