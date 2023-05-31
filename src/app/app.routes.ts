import {Routes} from "@angular/router";
import {AddEmployeeComponent} from "./components/employee/add-employee/add-employee.component";
import {EditEmployeeComponent} from "./components/employee/edit-employee/edit-employee.component";
import {ListEmployeesComponent} from "./components/employee/list-employees/list-employees.component";
import {
  ListEstablishmentsComponent
} from "./components/establishment/list-establishments/list-establishments.component";
import {AddEstablishmentComponent} from "./components/establishment/add-establishment/add-establishment.component";
import {EditEstablishmentComponent} from "./components/establishment/edit-establishment/edit-establishment.component";
import {ListRegistrationsComponent} from "./components/registration/list-registrations/list-registrations.component";

export const AppRoutes: Routes = [
  {path: 'employee', component: ListEmployeesComponent},
  {path: 'employee/add', component: AddEmployeeComponent},
  {path: 'employee/edit/:id', component: EditEmployeeComponent},
  {path: 'establishment', component: ListEstablishmentsComponent},
  {path: 'establishment/add', component: AddEstablishmentComponent},
  {path: 'establishment/edit/:id', component: EditEstablishmentComponent},
  {path: 'registration', component: ListRegistrationsComponent}
];
