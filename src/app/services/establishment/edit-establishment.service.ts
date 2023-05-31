import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {UpdateEstablishmentDTO} from "../../shared/dtos/request/establishment/update-establishment-dto";

@Injectable({
  providedIn: 'root'
})
export class EditEstablishmentService {

  constructor(private http: HttpClient) {
  }

  private baseURL: string = environment.apiURL;

  public perform(id: bigint, data: UpdateEstablishmentDTO): Observable<any> {
    return this.http.put(`${this.baseURL}/establishment/`, data);
  }
}
