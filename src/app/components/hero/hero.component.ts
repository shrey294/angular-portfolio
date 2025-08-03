import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DisplayIcon, header } from '../../models/header.model';
import { HeaderService } from '../../serivces/header.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  profileData: Partial<header> = {
    name: 'Shrey Gandhi',
    designation: 'Full Stack Developer',

    shortDescription: 'I build exceptional digital experiences...'
  };
  techIcons: DisplayIcon[] = [];
  constructor(private apiservice: HeaderService) { }
  ngOnInit(): void {
    this.apiservice.getheaderdata().subscribe({
      next: (data: header[]) => {
        if (data?.[0]) {
          // console.log(data[0]);
          this.profileData = {
            ...data[0],
            shortDescription: this.stripHtml(data[0].shortDescription)
          };
          this.processicons(data[0].icons);
        }
      },
      error: (err) => console.error('Error loading hero data', err)
    });
  }
  private processicons(iconString: string = '') {
    this.techIcons = iconString.split(',').filter(iconclass => iconclass.trim()).map(iconclass => ({
      iconClass: iconclass.trim(),
      name: this.geticonname(iconclass.trim())
    }));
  }
  private geticonname(iconclass: string): string {
    const namepart = iconclass.split(' ');
    if (namepart.length >= 2) {
      const lastpart = namepart[1].split('-').pop();
      return lastpart ? this.capitalize(lastpart) : iconclass;
    }
    return iconclass;
  }
  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').trim();
  }
}