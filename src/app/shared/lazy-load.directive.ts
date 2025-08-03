import { Directive, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements OnInit {
  @Input() appLazyLoad!: Promise<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  async ngOnInit() {
    try {
      const component = await this.appLazyLoad;
      this.viewContainerRef.createComponent(component);
    } catch (error) {
      console.error('Error loading component:', error);
    }
  }
}