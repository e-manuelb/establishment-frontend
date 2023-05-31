import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ViewEstablishmentService} from "../../../services/establishment/view-establishment.service";
import {Establishment} from "../../../models/establishment/establishment";

@Component({
  selector: 'app-view-establishment-dialog',
  templateUrl: './view-establishment-dialog.component.html',
  styleUrls: ['./view-establishment-dialog.component.scss']
})
export class ViewEstablishmentDialogComponent {
  establishment!: Establishment;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private viewEstablishmentService: ViewEstablishmentService) {
  }

  ngOnInit(): void {
    this.viewEstablishmentById(this.data.id);
  }

  viewEstablishmentById(id: number) {
    this.viewEstablishmentService.perform(id).subscribe({
      next: (response) => {
        this.establishment = new Establishment(
          response.id,
          response.name,
          response.phone,
          response.address.address,
          response.address.number,
          response.address.complement,
          response.address.neighborhood,
          response.address.cep,
          response.address.city,
          response.address.state
        );
      }
    })
  }
}
