// src/app/services/seo.service.ts
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { header } from '../models/header.model';
import { SkillCategory } from '../models/skills.model';
import { Project } from '../models/project.model';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  setHeroMetaTags(profile: header) {
    this.title.setTitle(`${profile.name} - ${profile.designation} | Portfolio`);
    
    this.meta.updateTag({ 
      name: 'description', 
      content: this.stripHtml(profile.shortDescription).substring(0, 160) 
    });
    
    this.meta.updateTag({ 
      name: 'keywords', 
      content: `${profile.name}, ${profile.designation}, ${profile.icons.split(',').join(', ')}` 
    });
    
    // Open Graph/Facebook
    this.meta.updateTag({ property: 'og:title', content: `${profile.name} - ${profile.designation}` });
    this.meta.updateTag({ property: 'og:description', content: this.stripHtml(profile.shortDescription).substring(0, 160) });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    
    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: `${profile.name} - ${profile.designation}` });
    this.meta.updateTag({ name: 'twitter:description', content: this.stripHtml(profile.shortDescription).substring(0, 160) });
  }
  setAboutMetaTags(aboutData: { description: string; experience: number }) {
    const cleanDescription = this.stripHtml(aboutData.description).substring(0, 160);
    const pageTitle = `About Me - ${aboutData.experience}+ Years Experience`;

    this.title.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: cleanDescription });
    this.meta.updateTag({ name: 'keywords', content: `about me, experience, skills, education` });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: cleanDescription });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: cleanDescription });
  }
  setSkillsMetaTags(skills: SkillCategory[]) {
  const titles = skills.map(skill => skill.title).join(', ');
  const keywords = skills
    .flatMap(skill => skill.pillText.split(','))
    .map(tag => tag.trim())
    .filter(Boolean)
    .join(', ');

    const description = `Explore my skills including ${titles}. Key strengths include ${keywords.split(', ').slice(0, 10).join(', ')} and more.`;

    const pageTitle = `Skills Overview - Technologies & Tools`;

    this.title.setTitle(pageTitle);

  this.meta.updateTag({ name: 'description', content: description });
  this.meta.updateTag({ name: 'keywords', content: keywords });

  // Open Graph
  this.meta.updateTag({ property: 'og:title', content: pageTitle });
  this.meta.updateTag({ property: 'og:description', content: description });
  this.meta.updateTag({ property: 'og:type', content: 'website' });

  // Twitter
  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
  this.meta.updateTag({ name: 'twitter:description', content: description });
  }
  setProjectsMetaTags(projects: Project[]) {
  const titles = projects.map(p => p.title).join(', ');
  const techTags = projects
    .flatMap(p => p.stackPill.split(','))
    .map(tag => tag.trim())
    .filter(Boolean)
    .join(', ');

  const description = `Explore my featured projects including ${titles}. Technologies used include ${techTags.split(', ').slice(0, 10).join(', ')} and more.`;

  const pageTitle = `My Work - Featured Projects & Technologies`;

  this.title.setTitle(pageTitle);

  this.meta.updateTag({ name: 'description', content: description });
  this.meta.updateTag({ name: 'keywords', content: `${titles}, ${techTags}` });

  // Open Graph
  this.meta.updateTag({ property: 'og:title', content: pageTitle });
  this.meta.updateTag({ property: 'og:description', content: description });
  this.meta.updateTag({ property: 'og:type', content: 'website' });

  // Twitter
  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
  this.meta.updateTag({ name: 'twitter:description', content: description });
}

setContactMetaTags(contact: Contact) {
    const description = `Get in touch via email: ${contact.email}, phone: ${contact.phone}, or visit: ${contact.location}. Let's work together.`;
    const keywords = `contact, email, phone, location, reach out, get in touch`;
    const pageTitle = `Contact Me - Let's Get In Touch`;

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });

    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }
setFooterMetaTags(): void {
  this.title.setTitle('Shrey Gandhi | Portfolio Footer');

  this.meta.updateTag({
    name: 'description',
    content: 'Explore the footer of Shrey Gandhi’s portfolio including links to home, about, skills, projects, contact and social profiles like GitHub, LinkedIn, Instagram, and email.'
  });

  this.meta.updateTag({
    name: 'keywords',
    content: 'Shrey Gandhi, Portfolio, Footer, GitHub, LinkedIn, Contact, Projects, Skills, About'
  });

  // Open Graph
  this.meta.updateTag({ property: 'og:title', content: 'Shrey Gandhi | Footer' });
  this.meta.updateTag({ property: 'og:description', content: 'Connect with Shrey Gandhi through his portfolio footer.' });
  this.meta.updateTag({ property: 'og:url', content: window.location.href });

  // Twitter
  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({ name: 'twitter:title', content: 'Shrey Gandhi | Footer' });
  this.meta.updateTag({ name: 'twitter:description', content: 'Connect with Shrey Gandhi through his portfolio footer.' });
}


  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }
}