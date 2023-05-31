import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {SaveEstablishmentService} from "../../../services/establishment/save-establishment.service";
import {SaveEstablishmentDTO} from "../../../shared/dtos/request/establishment/save-establishment-dto";

@Component({
  selector: 'app-add-establishment',
  templateUrl: './add-establishment.component.html',
  styleUrls: ['./add-establishment.component.scss']
})
export class AddEstablishmentComponent {
  formEstablishment: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(
    private saveEstablishmentService: SaveEstablishmentService,
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.formEstablishment = new FormGroup({});
  }

  ngOnInit() {
    this.createForm(new SaveEstablishmentDTO())
  }

  get validations() {
    return this.formEstablishment.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.formEstablishment.valid) {
      this.saveEstablishmentService.perform(this.formEstablishment.value).subscribe({
        next: () => {
          this.toaster.success("Empresa cadastrada com sucesso!");
          this.router.navigate(['establishment']);
        }
      })
    }
  }

  createForm(saveEstablishmentDTO: SaveEstablishmentDTO) {
    this.formEstablishment = this.formBuilder.group({
      name: [saveEstablishmentDTO.name, Validators.required],
      phone: [saveEstablishmentDTO.phone, Validators.required],
      address: [saveEstablishmentDTO.address, Validators.required],
      number: [saveEstablishmentDTO.number, Validators.required],
      complement: [saveEstablishmentDTO.complement, Validators.required],
      neighborhood: [saveEstablishmentDTO.neighborhood, Validators.required],
      cep: [saveEstablishmentDTO.cep, Validators.required],
      city: [saveEstablishmentDTO.city, Validators.required],
      state: [saveEstablishmentDTO.state, Validators.required],
    });
  }
}
