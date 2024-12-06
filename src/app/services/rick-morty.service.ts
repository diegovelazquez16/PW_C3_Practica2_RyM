import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  // Obtener episodios
  obtenerEpisodios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/episode`);
  }
}