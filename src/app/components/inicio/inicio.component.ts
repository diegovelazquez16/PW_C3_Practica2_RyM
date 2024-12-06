// Archivo: src/app/components/inicio/inicio.component.ts
import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../services/rick-morty.service';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  episodios: any[] = [];
  episodioSeleccionado: any = null;

  constructor(
    private rickMortyService: RickMortyService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.obtenerEpisodios();
  }

  obtenerEpisodios() {
    this.rickMortyService.obtenerEpisodios().subscribe((respuesta: any) => {
      this.episodios = respuesta.results;
    });
  }

  alternarFavorito(episodio: any) {
    this.favoritosService.alternarFavorito(episodio);
  }

  esFavorito(episodio: any): boolean {
    return this.favoritosService.esFavorito(episodio);
  }

  mostrarPersonajes(episodio: any) {
    this.episodioSeleccionado = episodio;
  }

  cerrarModal() {
    this.episodioSeleccionado = null;
  }
}