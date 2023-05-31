import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {UpdateEmployeeDTO} from "../../shared/dtos/request/employee/update-employee-dto";

@Injectable({
  providedIn: 'root'
})
export class EditEmployeeService {

  constructor(private http: HttpClient) {
  }

  private baseURL: string = environment.apiURL;

  public perform(id: bigint, data: UpdateEmployeeDTO): Observable<any> {
    return this.http.put(`${this.baseURL}/employee/`, data);
  }
}
