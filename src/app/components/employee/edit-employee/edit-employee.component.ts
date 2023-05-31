import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UploadImageService} from "../../../services/helpers/upload-image.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {EditEmployeeService} from "../../../services/employee/edit-employee.service";
import {UpdateEmployeeDTO} from "../../../shared/dtos/request/employee/update-employee-dto";
import {ViewEmployeeService} from "../../../services/employee/view-employee.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {
  formEmployee: FormGroup = new FormGroup({});
  submitted: boolean = false;
  private file!: File;
  private photoUrl!: string;

  constructor(
    private findEmployeeByIdService: ViewEmployeeService,
    private editEmployeeService: EditEmployeeService,
    private formBuilder: FormBuilder,
    private uploadImageService: UploadImageService,
    private toaster: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formEmployee = new FormGroup({});
  }

  ngOnInit() {
    this.createForm(new UpdateEmployeeDTO());
    this.route.params.subscribe((params) => {
      this.findById(params['id']);
    })
  }

  get validations() {
    return this.formEmployee.controls;
  }

  findById(id: number) {
    this.findEmployeeByIdService.perform(id).subscribe({
      next: (response: any) => {
        this.formEmployee.setValue({
          employeeId: response.id,
          name: response.name,
          photoUrl: response.photoUrl,
          phone: response.phone,
          role: response.role,
          employeeAddressId: response.address.id,
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

  createForm(updateEmployeeDTO: UpdateEmployeeDTO) {
    this.formEmployee = this.formBuilder.group({
      employeeId: [updateEmployeeDTO.employeeId],
      name: [updateEmployeeDTO.name, Validators.required],
      photoUrl: [updateEmployeeDTO.photoUrl],
      phone: [updateEmployeeDTO.phone, Validators.required],
      role: [updateEmployeeDTO.role, Validators.required],
      employeeAddressId: [updateEmployeeDTO.employeeAddressId],
      address: [updateEmployeeDTO.address, Validators.required],
      number: [updateEmployeeDTO.number, Validators.required],
      complement: [updateEmployeeDTO.complement, Validators.required],
      neighborhood: [updateEmployeeDTO.neighborhood, Validators.required],
      cep: [updateEmployeeDTO.cep, Validators.required],
      city: [updateEmployeeDTO.city, Validators.required],
      state: [updateEmployeeDTO.state, Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.formEmployee.valid) {
      if (!!this.file) {
        this.uploadImageService.perform(this.file).subscribe({
          next: (response) => {
            this.photoUrl = response.fileUrl;
          },
          error: (error) => {
            return error;
          },
          complete: () => {
            this.formEmployee.patchValue({
              photoUrl: this.photoUrl
            });

            this.editEmployeeService.perform(this.formEmployee.value.employeeId, this.formEmployee.value).subscribe({
              next: () => {
                this.toaster.success("Usuário atualizado com sucesso!");
                this.router.navigate(['employee']);
              }
            })
          }
        })
      } else {
        this.editEmployeeService.perform(this.formEmployee.value.employeeId, this.formEmployee.value).subscribe({
          next: () => {
            this.toaster.success("Usuário atualizado com sucesso!");
            this.router.navigate(['employee']);
          }
        })
      }
    }
  }

  onChangeImage(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  onReset() {
    this.submitted = false;
    this.formEmployee.reset();
  }
}
