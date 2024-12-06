import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: any[] = [];

  alternarFavorito(episodio: any) {
    const index = this.favoritos.findIndex(fav => fav.id === episodio.id);
    if (index !== -1) {
      this.favoritos.splice(index, 1); // Eliminar de favoritos
    } else {
      this.favoritos.push(episodio); // Agregar a favoritos
    }
  }

  esFavorito(episodio: any): boolean {
    return this.favoritos.some(fav => fav.id === episodio.id);
  }

  obtenerFavoritos(): any[] {
    return this.favoritos;
  }
}