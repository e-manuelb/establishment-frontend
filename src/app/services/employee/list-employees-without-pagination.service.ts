import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListEmployeesWithoutPaginationService {

  constructor(private http: HttpClient) {
  }

  private baseURL = environment.apiURL;

  public perform() {
    return this.http.get(`${this.baseURL}/employee/all`);
  }
}
