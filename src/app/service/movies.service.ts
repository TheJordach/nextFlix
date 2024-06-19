import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { MoviesDto } from '../types/movies'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl: string = 'https://api.themoviedb.org/3'
  private apiKey: string = '2dcbb3701140aaf64190041a20ae1978'
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    )
  }
}
