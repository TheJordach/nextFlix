import { Component, OnInit } from '@angular/core'

import { MoviesService } from '../../service/movies.service'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.sass',
  animations: [
    trigger('sliderFade', [state('void', style({ opacity: 0 }))]),
    transition('void <=> *', [animate('1s')]),
  ],
})
export class SliderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies$ = this.moviesService.getPopularMovies()

  slideIIndex = 0

  ngOnInit(): void {
    setInterval(() => {
      this.slideIIndex += 1
    }, 5000)
  }
}
