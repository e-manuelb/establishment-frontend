import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {SaveEmployeeDTO} from "../../../shared/dtos/request/employee/save-employee-dto";
import {SaveRegistrationService} from "../../../services/registration/save-registration.service";
import {
  ListEmployeesWithoutPaginationService
} from "../../../services/employee/list-employees-without-pagination.service";
import {
  ListEstablishmentsWithoutPaginationService
} from "../../../services/establishment/list-establishments-without-pagination.service";

@Component({
  selector: 'app-add-registration-dialog',
  templateUrl: './add-registration-dialog.component.html',
  styleUrls: ['./add-registration-dialog.component.scss']
})
export class AddRegistrationDialogComponent {

  formRegistration: FormGroup = new FormGroup({});
  submitted: boolean = false;
  employees!: any;
  establishments!: any;

  constructor(
    private listEmployeesWithoutPaginationService: ListEmployeesWithoutPaginationService,
    private listEstablishmentsWithoutPaginationService: ListEstablishmentsWithoutPaginationService,
    private saveRegistrationService: SaveRegistrationService,
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.formRegistration = new FormGroup({});
  }

  ngOnInit() {
    this.createForm(new SaveEmployeeDTO())
    this.getEmployeesAndEstablishments();
  }

  createForm(form: any) {
    this.formRegistration = this.formBuilder.group({
      employeeId: [form.employeeId, Validators.required],
      establishmentId: [form.establishmentId, Validators.required]
    });
  }

  get validations() {
    return this.formRegistration.controls;
  }

  getEmployeesAndEstablishments() {
    this.listEmployeesWithoutPaginationService.perform().subscribe({
      next: (response: any) => {
        this.employees = response;
      }
    })

    this.listEstablishmentsWithoutPaginationService.perform().subscribe({
      next: (response: any) => {
        this.establishments = response;
      }
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.formRegistration.valid) {
      this.saveRegistrationService.perform(this.formRegistration.value).subscribe({
        next: (response: any) => {
          this.toaster.success("Matrícula cadastrada com sucesso!");
          this.router.navigate(['registration']);
        },
        error: (error) => {
          return error;
        }
      })
    }
  }

}
