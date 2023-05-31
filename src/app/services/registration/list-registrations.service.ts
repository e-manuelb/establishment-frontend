import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListRegistrationsService {

  constructor(private http: HttpClient) { }

  private baseURL: string = environment.apiURL;

  public perform(pageNumber: number = 0, pageSize: number = 10) {
    return this.http.get(`${this.baseURL}/establishment/employee?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
