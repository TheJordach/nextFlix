import { Component, OnInit } from '@angular/core'

import { MoviesService } from '../../service/movies.service'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.sass',
})
export class SliderComponent {
  constructor(private moviesService: MoviesService) {}

  movies$ = this.moviesService.getPopularMovies()
  items = ['name1', 'name2', 'name3', 'name4']
}
