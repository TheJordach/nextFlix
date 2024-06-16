import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ComponentsModule } from '../components/components.module'



@NgModule({
  declarations: [HomeComponent, MoviesListComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HomeComponent, MoviesListComponent],
})
export class PageContentModule {}
