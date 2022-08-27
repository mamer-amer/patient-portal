import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllClinics():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/Clinics`);
  }

  getAllDoctors():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/Doctors`)
  }

}
