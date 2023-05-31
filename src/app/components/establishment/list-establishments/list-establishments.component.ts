import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ListEstablishmentsService} from "../../../services/establishment/list-establishments.service";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";
import {DeleteEstablishmentDialogComponent} from "../delete-establishment-dialog/delete-establishment-dialog.component";
import {ViewEstablishmentDialogComponent} from "../view-establishment-dialog/view-establishment-dialog.component";

@Component({
  selector: 'app-list-establishments',
  templateUrl: './list-establishments.component.html',
  styleUrls: ['./list-establishments.component.scss']
})
export class ListEstablishmentsComponent {
  displayedColumns: string[] = ['id', 'name', 'phone', 'address', 'number', 'neighborhood', 'complement', 'city', 'state', 'actions'];
  dataSource: any;
  establishmentsLength: number = 0;

  constructor(private listEstablishmentsService: ListEstablishmentsService, public dialog: MatDialog) {
  }

  openDeleteDialog(id: number) {
    let dialogReference = this.dialog.open(DeleteEstablishmentDialogComponent, {data: {id: id}});

    dialogReference.afterClosed().subscribe({
      next: () => {
        this.getAllEstablishments();
      }
    })
  }

  openViewDialog(id: number) {
    this.dialog.open(ViewEstablishmentDialogComponent, {data: {id: id}});
  }

  getAllEstablishments(pageNumber: number = 0, pageSize: number = 10) {
    this.listEstablishmentsService.perform(pageNumber, pageSize).subscribe({
        next: (response) => {
          if (!!response && !!response.content) {
            this.dataSource = new MatTableDataSource(response.content);
            this.establishmentsLength = response.totalElements;
          }
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
  }

  onPageChange(event: PageEvent) {
    this.getAllEstablishments(event.pageIndex, event.pageSize);
  }

  ngOnInit(): void {
    this.getAllEstablishments();
  }
}
