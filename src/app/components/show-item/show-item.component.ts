import { Component } from '@angular/core'
import { MoviesService } from '../../service/movies.service'
import { imagesBaseUrl, imagesSizes } from '../../constants/images-sizes'

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.sass',
})
export class ShowItemComponent {
  imagesBaseUrl = imagesBaseUrl
  imagesSizes = imagesSizes
  constructor(private moviesService: MoviesService) {}

  moviesCard$ = this.moviesService.getPopularMovies()
}
