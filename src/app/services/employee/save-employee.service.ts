import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {SaveEmployeeDTO} from "../../shared/dtos/request/employee/save-employee-dto";

@Injectable({
  providedIn: 'root'
})
export class SaveEmployeeService {

  constructor(private http: HttpClient) {
  }

  private baseURL: string = environment.apiURL;

  public perform(data: SaveEmployeeDTO): Observable<any> {
    console.log(data.photoUrl);
    return this.http.post(`${this.baseURL}/employee/`, data);
  }
}
