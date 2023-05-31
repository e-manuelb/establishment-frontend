import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {SaveEstablishmentDTO} from "../../shared/dtos/request/establishment/save-establishment-dto";

@Injectable({
  providedIn: 'root'
})
export class SaveEstablishmentService {

  constructor(private http: HttpClient) {
  }

  private baseURL: string = environment.apiURL;

  public perform(data: SaveEstablishmentDTO): Observable<any> {
    return this.http.post(`${this.baseURL}/establishment/`, data);
  }
}
