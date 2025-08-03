import { NgModule, Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class LazyLoadingModule {
  static loadComponent<T>(component: Type<T>): Promise<Type<T>> {
    return Promise.resolve(component);
  }
}