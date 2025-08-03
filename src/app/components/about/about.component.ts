import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../../serivces/about-me.service';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../serivces/seo.service';

interface Skill {
  name: string;
  percentage: number;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface Education {
  qualification: string;
  collegeName: string;
  duration: string;
  description:string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],  // <-- Add this
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  activeTab: string = 'skills';
   loading: boolean = true;
  aboutData: any = {
    description: '',
    experience: 0,
    imageurl: ''
  };
   error: string | null = null;
  constructor(private apiservice:AboutMeService, private seoService:SeoService){}
  ngOnInit(): void {
    this.loading = true;
    this.loadAboutData();
    this.loadskills();
    
  }
  loadAboutData(){
    this.apiservice.getbasicintro().subscribe({
      next:(data:any)=>{
        //console.log(data)
        this.aboutData = {
          ...this.aboutData, // Keep defaults
          ...data // Override with API data
        };
        this.loading = false;
        this.seoService.setAboutMetaTags(this.aboutData);
      },
      error:(err)=>{
        this.error = 'Failed to load about data. Please try again later.';
        this.loading =false;
        console.error('Error loading about data:', err);
      }
    });
  }
  loadskills(){
    this.apiservice.getskills().subscribe({
    next: (data: any[]) => {
      this.skills = data.map(skill => ({
        name: skill.skillName,
        percentage: skill.skillPercantage
      }));
    },
    error: (err) => {
      console.error('Error loading skills:', err);
    }
  });

  }
  skills: Skill[] = [];

  experience: Experience[] = [];

  education: Education[] = [];

  setTab(tab: string) {
    this.activeTab = tab;
  }
  onExperienceTabClick(): void {
  //console.log('Experience tab clicked');
    this.apiservice.getexperience().subscribe({
    next: (data: any[]) => {
      //console.log(data);
      this.experience = data.map(item => ({
        title: item.title,
        company: item.companyName,
        duration: item.duration,
        description: item.description
      }));
    },
    error: (err) => {
      console.error('Error loading experience:', err);
    }
  });
}
educationtabclick(){
  
  this.apiservice.geteducation().subscribe({
    next:(data:any[])=>{
      
      this.education = data.map(item=>({
        qualification:item.qualification,
        duration:item.duration,
        collegeName:item.collegeName,
        description:item.description
      }));
    }
  })
}
}