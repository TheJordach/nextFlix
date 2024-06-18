import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [SliderComponent],
})
export class ComponentsModule {}
