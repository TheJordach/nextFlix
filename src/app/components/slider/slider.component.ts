import { Component, OnInit } from '@angular/core'
import { imagesSizes, imagesBaseUrl } from '../../constants/images-sizes'
import { MoviesService } from '../../service/movies.service'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.sass',
  animations: [
    trigger('slideFade', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies$ = this.moviesService.getPopularMovies()

  slideIIndex = 0
  imagesBaseUrl = imagesBaseUrl
  imagesSizes = imagesSizes

  ngOnInit(): void {
    this.changeSlide()
  }

  changeSlide() {
    setInterval(() => {
      this.slideIIndex += 1
      if (this.slideIIndex > 10) {
        this.slideIIndex = 0
      }
    }, 5000)
  }
}
