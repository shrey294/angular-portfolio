import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class MyworkService {

  private readonly baseurl = 'https://shreygandhi.bsite.net/api/Portfolio/GetProjectList'
  constructor(private http:HttpClient) { }

  getprojectlist(){
    return this.http.get<Project[]>(`${this.baseurl}`);
  }
}
