import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { SeoService } from '../../serivces/seo.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor(private seoService:SeoService, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document){}
  ngOnInit(): void {
    this.seoService.setFooterMetaTags();
     this.insertFooterJsonLd();
  }
   insertFooterJsonLd(): void {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Shrey Gandhi",
      "url": "https://your-portfolio-url.com",  // Replace with your actual URL
      "sameAs": [
        "https://github.com/shrey294",
        "https://www.linkedin.com/in/shrey-gandhi-370788239",
        "https://www.instagram.com/shreysg/",
        "mailto:gshrey470@gmail.com"
      ],
      "description": "Footer section of Shrey Gandhi’s portfolio with navigation and social links."
    };
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.renderer.appendChild(this.document.head, script);
  }
}
