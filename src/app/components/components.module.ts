import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { SliderComponent } from './slider/slider.component'
import { BannerComponent } from './banner/banner.component'
import { ShowItemComponent } from './show-item/show-item.component'

@NgModule({
  declarations: [SliderComponent, BannerComponent, ShowItemComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [SliderComponent, BannerComponent, ShowItemComponent],
})
export class ComponentsModule {}
