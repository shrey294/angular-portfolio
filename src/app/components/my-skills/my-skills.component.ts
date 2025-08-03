import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../serivces/skills.service';
import { SkillCategory } from '../../models/skills.model';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../serivces/seo.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css'
})
export class MySkillsComponent implements OnInit {

  skillCategories: SkillCategory[] = [];

  constructor(private apiservice:SkillsService, private seo:SeoService){}
  ngOnInit(): void {
    this.apiservice.getskills().subscribe({
      next: (data: SkillCategory[]) => {
        this.skillCategories = data;
           this.seo.setSkillsMetaTags(data);
      },
      error: (err) => {
        console.error('Error loading skills:', err);
      }
    });
  }
getSkillTags(pillText: string): string[] {
    return pillText.split(',').map(s => s.trim()).filter(Boolean);
  }
}
