import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  @Input() urls: string[] = [];
  personajes: any[] = [];

  constructor(private http: HttpClient) {}

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
}
