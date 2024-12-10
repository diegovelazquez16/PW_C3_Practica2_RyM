import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css'],
  standalone: false
})
export class EpisodioComponent {
  @Input() episodio: any; 
}
