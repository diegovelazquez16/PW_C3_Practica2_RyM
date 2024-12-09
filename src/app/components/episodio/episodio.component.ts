import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent {
  @Input() episodio: any; // Recibirá los datos del episodio desde el componente padre
}
