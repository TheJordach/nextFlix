import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
