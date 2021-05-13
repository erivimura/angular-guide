import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/peliculas.service'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public titulo: string = "";
  public peliculas: Pelicula[] = [];
  public favorita: Pelicula;

  constructor(
    private _peliculaService: PeliculaService
  ) { 
    this.titulo  = "Componente Peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
  }

  ngOnInit(): void {
   
  }

  showFavorita(event) {
    this.favorita = event.pelicula;    
  }

}