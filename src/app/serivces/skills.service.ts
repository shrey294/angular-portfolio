import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SkillCategory } from '../models/skills.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private readonly baseurl = 'https://shreygandhi.bsite.net/api/Portfolio/GetSkills'
  constructor(private http:HttpClient) { }

  getskills(): Observable<SkillCategory[]>{
    return this.http.get<SkillCategory[]>(`${this.baseurl}`);
  }
}
