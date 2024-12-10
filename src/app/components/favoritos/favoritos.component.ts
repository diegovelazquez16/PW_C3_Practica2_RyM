import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  standalone: false

})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];
  mostrar: boolean = false; 

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }

  abrirModal() {
    this.favoritos = this.favoritosService.obtenerFavoritos(); 
    this.mostrar = true;
  }

  cerrarModal() {
    this.mostrar = false;
  }

  quitarDeFavoritos(episodio: any) {
    this.favoritosService.alternarFavorito(episodio);
    this.favoritos = this.favoritosService.obtenerFavoritos(); 
  }
}


