import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }

  quitarDeFavoritos(episodio: any) {
    this.favoritosService.alternarFavorito(episodio);
    this.favoritos = this.favoritosService.obtenerFavoritos(); // Actualiza la lista
  }
}
