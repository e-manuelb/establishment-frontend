import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) {
  }

  private baseURL: string = environment.apiURL;

  public perform(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('file', image);

    return this.http.post(`${this.baseURL}/upload/`, formData);
  }
}
