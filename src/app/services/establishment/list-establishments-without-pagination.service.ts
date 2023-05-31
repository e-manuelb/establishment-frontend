import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ListEstablishmentsWithoutPaginationService {

  constructor(private http: HttpClient) {
  }

  private baseURL = environment.apiURL;

  public perform() {
    return this.http.get(`${this.baseURL}/establishment/all`);
  }
}
