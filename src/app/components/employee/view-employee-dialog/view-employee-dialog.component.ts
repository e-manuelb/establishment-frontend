import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ViewEmployeeService} from "../../../services/employee/view-employee.service";
import {Employee} from "../../../models/employee/employee";

@Component({
  selector: 'app-view-employee-dialog',
  templateUrl: './view-employee-dialog.component.html',
  styleUrls: ['./view-employee-dialog.component.scss']
})
export class ViewEmployeeDialogComponent {
  employee!: Employee;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private viewEmployeeService: ViewEmployeeService) {
  }

  ngOnInit(): void {
    this.viewEmployeeById(this.data.id);
  }

  public viewEmployeeById(id: number) {
    this.viewEmployeeService.perform(id).subscribe({
      next: (response) => {
        this.employee = new Employee(
          response.id,
          response.name,
          response.photoUrl,
          response.phone,
          response.role,
          response.address.address,
          response.address.number,
          response.address.complement,
          response.address.neighborhood,
          response.address.cep,
          response.address.city,
          response.address.state
        );
      }
    });
  }
}
