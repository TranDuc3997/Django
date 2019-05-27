import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FileService {
  constructor(private http: HttpClient) {}

  public upload(formData: any) {
    return this.http.post<any>(`${SERVER_API_URL}/upload/`, formData);
  }
}
