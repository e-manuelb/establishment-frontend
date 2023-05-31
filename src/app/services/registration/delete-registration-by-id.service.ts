import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeleteRegistrationByIdService {

  constructor(private http: HttpClient) {
  }

  private baseURL: string = environment.apiURL;

  public perform(id: number) {
    return this.http.delete(`${this.baseURL}/establishment/employee/${id}`);
  }
}
