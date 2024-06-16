import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { RouterLink, RouterLinkActive } from '@angular/router'

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, NgOptimizedImage, RouterLink, RouterLinkActive],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
