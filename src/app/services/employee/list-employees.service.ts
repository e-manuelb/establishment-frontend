import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListEmployeesService {

  constructor(private http: HttpClient) {
  }

  private baseURL: string = environment.apiURL;

  public perform(pageNumber: number = 0, pageSize: number = 10): Observable<any> {
    return this.http.get(`${this.baseURL}/employee?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
