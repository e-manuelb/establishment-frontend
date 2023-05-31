import {Component} from '@angular/core';
import {ListRegistrationsService} from "../../../services/registration/list-registrations.service";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DeleteRegistrationDialogComponent} from "../delete-registration-dialog/delete-registration-dialog.component";
import {AddRegistrationDialogComponent} from "../add-registration-dialog/add-registration-dialog.component";

@Component({
  selector: 'app-list-registrations',
  templateUrl: './list-registrations.component.html',
  styleUrls: ['./list-registrations.component.scss']
})
export class ListRegistrationsComponent {

  displayedColumns: string[] = ['id', 'employeeId', 'establishmentId', 'actions'];
  dataSource: any;
  registrationsLength: number = 0;

  constructor(private listRegistrationsService: ListRegistrationsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllRegistrations();
  }

  getAllRegistrations(pageNumber: number = 0, pageSize: number = 10) {
    this.listRegistrationsService.perform(pageNumber, pageSize).subscribe({
      next: (response: any) => {
        if (!!response && !!response.content) {
          this.dataSource = new MatTableDataSource(response.content);
          this.registrationsLength = response.totalElements;
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onPageChange(event: PageEvent) {
    this.getAllRegistrations(event.pageIndex, event.pageSize);
  }

  openAddDialog() {
    let dialogReference = this.dialog.open(AddRegistrationDialogComponent);

    dialogReference.afterClosed().subscribe({
      next: () => {
        this.getAllRegistrations();
      }
    })
  }

  openDeleteDialog(id: number) {
    let dialogReference = this.dialog.open(DeleteRegistrationDialogComponent, {data: {id: id}});

    dialogReference.afterClosed().subscribe({
      next: () => {
        this.getAllRegistrations();
      }
    })
  }
}
