import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { MoviesDto } from '../types/movies'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      'https://api.themoviedb.org/3/movie/popular?api_key=2dcbb3701140aaf64190041a20ae1978'
    )
  }
}
