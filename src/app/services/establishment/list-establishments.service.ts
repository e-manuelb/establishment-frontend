import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListEstablishmentsService {

  constructor(private http: HttpClient) {
  }

  private baseURL: string = environment.apiURL;

  public perform(pageNumber: number = 0, pageSize: number = 10): Observable<any> {
    return this.http.get(`${this.baseURL}/establishment?pageNumber=${pageNumber}&pageSize=${pageSize}`)
  }
}
