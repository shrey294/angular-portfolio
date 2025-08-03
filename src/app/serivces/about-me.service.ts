import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  // private readonly apiurl = 'https://shreygandhi.bsite.net/api/Portfolio/Getbasicintro';
  // private readonly apiurl1 = 'https://shreygandhi.bsite.net/api/Portfolio/getskillsp';
   private readonly baseUrl = 'https://shreygandhi.bsite.net/api/Portfolio';
  constructor(private http:HttpClient) { }

  getbasicintro(){
    //return this.http.get(this.apiurl);
    return this.http.get(`${this.baseUrl}/Getbasicintro`);
  }
  getskills(){
    //return this.http.get<any[]>(this.apiurl1);
    return this.http.get<any[]>(`${this.baseUrl}/getskillsp`);
  }
  getexperience(){
    return this.http.get<any[]>(`${this.baseUrl}/getexperience`);
  }
  geteducation(){
    return this.http.get<any[]>(`${this.baseUrl}/geteducation`);
  }
}
