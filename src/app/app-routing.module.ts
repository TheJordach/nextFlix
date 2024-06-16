import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MoviesListComponent } from './page-content/movies-list/movies-list.component'
import { HomeComponent } from './page-content/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies-list', component: MoviesListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
