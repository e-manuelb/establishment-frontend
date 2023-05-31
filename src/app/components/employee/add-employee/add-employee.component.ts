import {Component, OnInit} from '@angular/core';
import {SaveEmployeeDTO} from "../../../shared/dtos/request/employee/save-employee-dto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SaveEmployeeService} from "../../../services/employee/save-employee.service";
import {UploadImageService} from "../../../services/helpers/upload-image.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  formEmployee: FormGroup = new FormGroup({});
  submitted: boolean = false;
  private file!: File;
  private photoUrl!: string;

  constructor(
    private saveEmployeeService: SaveEmployeeService,
    private formBuilder: FormBuilder,
    private uploadImageService: UploadImageService,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.formEmployee = new FormGroup({});
  }

  ngOnInit() {
    this.createForm(new SaveEmployeeDTO())
  }

  createForm(saveEmployeeDTO: SaveEmployeeDTO) {
    this.formEmployee = this.formBuilder.group({
      name: [saveEmployeeDTO.name, Validators.required],
      photoUrl: [saveEmployeeDTO.photoUrl],
      phone: [saveEmployeeDTO.phone, Validators.required],
      role: [saveEmployeeDTO.role, Validators.required],
      address: [saveEmployeeDTO.address, Validators.required],
      number: [saveEmployeeDTO.number, Validators.required],
      complement: [saveEmployeeDTO.complement, Validators.required],
      neighborhood: [saveEmployeeDTO.neighborhood, Validators.required],
      cep: [saveEmployeeDTO.cep, Validators.required],
      city: [saveEmployeeDTO.city, Validators.required],
      state: [saveEmployeeDTO.state, Validators.required],
    });
  }

  get validations() {
    return this.formEmployee.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.formEmployee.valid && !!this.file) {
      this.uploadImageService.perform(this.file).subscribe({
        next: (response: any) => {
          this.photoUrl = response.fileUrl;
        },
        error: (error) => {
          return error;
        },
        complete: () => {
          this.formEmployee.patchValue({
            photoUrl: this.photoUrl
          });

          this.saveEmployeeService.perform(this.formEmployee.value).subscribe({
            next: () => {
              this.toaster.success("Usuário cadastrado com sucesso!");
              this.router.navigate(['employee']);
            }
          })
        }
      })
    }
  }

  onChangeImage(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
}
