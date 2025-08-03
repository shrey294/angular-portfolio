import { Component, OnInit } from '@angular/core';
import { MyworkService } from '../../serivces/mywork.service';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../serivces/seo.service';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.css'
})
export class MyworkComponent implements OnInit {

  projectList: Project[] = [];

  constructor(private apiservice:MyworkService, private seo:SeoService){}
  
  ngOnInit(): void {
  this.apiservice.getprojectlist().subscribe({
    next: (data) => {
      this.projectList = data;
        this.seo.setProjectsMetaTags(data);
    },
    error: (error) => {
      console.error('Error loading work:', error);
      this.seo.setProjectsMetaTags([]);
    }
  });
}
}
