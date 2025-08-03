import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { enquiry } from '../models/enquiry.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactdetailsService {

  private readonly apiurl ='https://shreygandhi.bsite.net/api/Portfolio'
  private readonly apiurle = 'https://shreygandhi.bsite.net/api/enquiry/postenquiry'
  
  constructor(private http:HttpClient) { }

  getcontactdetails(){
    return this.http.get<Contact[]>(`${this.apiurl}/GetContactDetails`);
  }
  postenquiry(enquiry:enquiry):Observable<any>{
    return this.http.post<any>(this.apiurle,enquiry);
  }
}
