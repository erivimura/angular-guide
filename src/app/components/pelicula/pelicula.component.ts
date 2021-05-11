import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() peliculaFavorita = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setFavorita(event, pelicula) {
    this.peliculaFavorita.emit({
      pelicula: pelicula
    });
  }

}
