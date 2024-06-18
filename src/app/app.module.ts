import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { PageContentModule } from './page-content/page-content.module'
import { ComponentsModule } from './components/components.module'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './service/service.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    PageContentModule,
    ComponentsModule,
    ServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
