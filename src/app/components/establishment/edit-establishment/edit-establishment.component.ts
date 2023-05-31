import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {ViewEstablishmentService} from "../../../services/establishment/view-establishment.service";
import {EditEstablishmentService} from "../../../services/establishment/edit-establishment.service";
import {UpdateEstablishmentDTO} from "../../../shared/dtos/request/establishment/update-establishment-dto";

@Component({
  selector: 'app-edit-establishment',
  templateUrl: './edit-establishment.component.html',
  styleUrls: ['./edit-establishment.component.scss']
})
export class EditEstablishmentComponent {
  formEstablishment: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(
    private viewEstablishmentService: ViewEstablishmentService,
    private editEstablishmentService: EditEstablishmentService,
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formEstablishment = new FormGroup({});
  }

  ngOnInit() {
    this.createForm(new UpdateEstablishmentDTO());
    this.route.params.subscribe((params) => {
      this.findById(params['id']);
    })
  }

  get validations() {
    return this.formEstablishment.controls;
  }

  findById(id: number) {
    this.viewEstablishmentService.perform(id).subscribe({
      next: (response) => {
        this.formEstablishment.setValue({
          establishmentId: response.id,
          name: response.name,
          phone: response.phone,
          establishmentAddressId: response.address.id,
          address: response.address.address,
          number: response.address.number,
          complement: response.address.complement,
          neighborhood: response.address.neighborhood,
          cep: response.address.cep,
          city: response.address.city,
          state: response.address.state
        });
      }
    });
  }

  createForm(updateEstablishmentDTO: UpdateEstablishmentDTO) {
    this.formEstablishment = this.formBuilder.group({
      establishmentId: [updateEstablishmentDTO.establishmentId],
      name: [updateEstablishmentDTO.name, Validators.required],
      phone: [updateEstablishmentDTO.phone, Validators.required],
      establishmentAddressId: [updateEstablishmentDTO.establishmentAddressId],
      address: [updateEstablishmentDTO.address, Validators.required],
      number: [updateEstablishmentDTO.number, Validators.required],
      complement: [updateEstablishmentDTO.complement, Validators.required],
      neighborhood: [updateEstablishmentDTO.neighborhood, Validators.required],
      cep: [updateEstablishmentDTO.cep, Validators.required],
      city: [updateEstablishmentDTO.city, Validators.required],
      state: [updateEstablishmentDTO.state, Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.formEstablishment.valid) {
      this.editEstablishmentService.perform(this.formEstablishment.value.establishmentId, this.formEstablishment.value).subscribe({
        next: () => {
          this.toaster.success("Empresa atualizada com sucesso!");
          this.router.navigate(['establishment']);
        }
      })
    }
  }
}
