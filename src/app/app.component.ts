// import {AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
// import { isPlatformBrowser, CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { HeroComponent } from './components/hero/hero.component';
// import { AboutComponent } from './components/about/about.component';
// import { MySkillsComponent } from './components/my-skills/my-skills.component';
// import { MyworkComponent } from './components/mywork/mywork.component';
// import { GetintouchComponent } from './components/getintouch/getintouch.component';
// import { FooterComponent } from './components/footer/footer.component';
// // import more as needed (SkillsComponent, ProjectsComponent, etc.)

// interface LazySection {
//   id: string;
//   component: any;
//   loaded: boolean;
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet, NavbarComponent, HeroComponent],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements AfterViewInit {
//   title = 'portfolio';

//   // This will hold DOM elements for lazy sections
//   @ViewChildren('lazySection') lazySectionElements!: QueryList<ElementRef>;

//   // This config controls what gets lazy loaded and when
//   lazySections: LazySection[] = [
//     { id: 'about', component: AboutComponent, loaded: false },
//     { id: 'skills', component: MySkillsComponent, loaded: false },
//     {id:'mywork',component:MyworkComponent,loaded:false},
//     {id:'getintouch',component:GetintouchComponent,loaded:false},
//     {id:'footer',component:FooterComponent,loaded:false}
//   ];

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   ngAfterViewInit(): void {
//     if (!isPlatformBrowser(this.platformId)) return;

//     this.lazySectionElements.forEach((elementRef, index) => {
//       const observer = new IntersectionObserver(
//         entries => {
//           const entry = entries[0];
//           if (entry.isIntersecting && !this.lazySections[index].loaded) {
//             this.lazySections[index].loaded = true;
//             //console.log(`🔄 Lazy loaded section: ${this.lazySections[index].id}`);
//             observer.unobserve(entry.target);
//           }
//         },
//         { threshold: 0.2 }
//       );

//       observer.observe(elementRef.nativeElement);
//     });
//   }
// }
import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MyworkComponent } from './components/mywork/mywork.component';
import { GetintouchComponent } from './components/getintouch/getintouch.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    MySkillsComponent,
    MyworkComponent,
    GetintouchComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  isLoading = true;

  ngAfterViewInit(): void {
    // Wait for next event loop cycle to ensure all child views are rendered
    setTimeout(() => {
      // Simulate image/component load delay, or use more advanced logic if needed
      this.isLoading = false;
    }, 500); // Adjust or remove delay as needed
  }
}

