import {Component, OnInit} from '@angular/core';
import {ListEmployeesService} from "../../../services/employee/list-employees.service";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DeleteEmployeeDialogComponent} from "../delete-employee-dialog/delete-employee-dialog.component";
import {ViewEmployeeDialogComponent} from "../view-employee-dialog/view-employee-dialog.component";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
})

export class ListEmployeesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'phone', 'role', 'address', 'number', 'neighborhood', 'complement', 'city', 'state', 'actions'];
  dataSource: any;
  employeesLength: number = 0;

  constructor(private listEmployeesService: ListEmployeesService, public dialog: MatDialog) {
  }

  openDeleteDialog(id: number) {
    let dialogReference = this.dialog.open(DeleteEmployeeDialogComponent, {data: {id: id}});

    dialogReference.afterClosed().subscribe({
      next: () => {
        this.getAllEmployees();
      }
    })
  }

  openViewDialog(id: number) {
    this.dialog.open(ViewEmployeeDialogComponent, {data: {id: id}});
  }

  getAllEmployees(pageNumber: number = 0, pageSize: number = 10) {
    this.listEmployeesService.perform(pageNumber, pageSize).subscribe({
      next: (response: any) => {
        if (!!response && !!response.content) {
          this.dataSource = new MatTableDataSource(response.content);
          this.employeesLength = response.totalElements;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onPageChange(event: PageEvent) {
    this.getAllEmployees(event.pageIndex, event.pageSize);
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }
}
