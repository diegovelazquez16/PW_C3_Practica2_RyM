import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  @Input() urls: string[] = [];
  personajes: any[] = [];
  mostrarModal: boolean = false;
  personajeSeleccionado: any = null;

  constructor(private http: HttpClient, private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.urls.forEach(url => {
      this.http.get<any>(url).subscribe(personaje => {
        this.personajes.push(personaje);
      });
    });
  }

  abrirModal(personaje: any) {
    this.personajeSeleccionado = personaje;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.personajeSeleccionado = null;
  }

  agregarAFavoritos() {
    if (this.personajeSeleccionado) {
      this.favoritosService.alternarFavorito(this.personajeSeleccionado);
      this.cerrarModal();
    }
  }
}
