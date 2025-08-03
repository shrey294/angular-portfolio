import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { header } from '../models/header.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {
  private readonly apiurl = 'https://shreygandhi.bsite.net/api/Portfolio/Header';

  constructor(private http:HttpClient) { }

  getheaderdata():Observable<header[]>{
    return this.http.get<header[]>(this.apiurl);
  }
}
