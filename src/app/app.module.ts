import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AddEmployeeComponent} from './components/employee/add-employee/add-employee.component';
import {EditEmployeeComponent} from './components/employee/edit-employee/edit-employee.component';
import {AddEstablishmentComponent} from './components/establishment/add-establishment/add-establishment.component';
import {EditEstablishmentComponent} from './components/establishment/edit-establishment/edit-establishment.component';
import {
  ListEstablishmentsComponent
} from './components/establishment/list-establishments/list-establishments.component';
import {ListEmployeesComponent} from './components/employee/list-employees/list-employees.component';
import {AppRoutes} from "./app.routes";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {MatDialogModule} from "@angular/material/dialog";
import {
  DeleteEmployeeDialogComponent
} from './components/employee/delete-employee-dialog/delete-employee-dialog.component';
import {ViewEmployeeDialogComponent} from './components/employee/view-employee-dialog/view-employee-dialog.component';
import {
  ViewEstablishmentDialogComponent
} from "./components/establishment/view-establishment-dialog/view-establishment-dialog.component";
import {
  DeleteEstablishmentDialogComponent
} from "./components/establishment/delete-establishment-dialog/delete-establishment-dialog.component";
import {
  DeleteRegistrationDialogComponent
} from './components/registration/delete-registration-dialog/delete-registration-dialog.component';
import {ListRegistrationsComponent} from './components/registration/list-registrations/list-registrations.component';
import { AddRegistrationDialogComponent } from './components/registration/add-registration-dialog/add-registration-dialog.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AddEstablishmentComponent,
    EditEstablishmentComponent,
    ListEstablishmentsComponent,
    ListEmployeesComponent,
    NavbarComponent,
    DeleteEmployeeDialogComponent,
    ViewEmployeeDialogComponent,
    ViewEstablishmentDialogComponent,
    DeleteEstablishmentDialogComponent,
    DeleteRegistrationDialogComponent,
    ListRegistrationsComponent,
    AddRegistrationDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
