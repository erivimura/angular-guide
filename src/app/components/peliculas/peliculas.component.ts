import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public titulo: string = "";
  public peliculas: Array<any> = [];

  constructor() { 
    this.titulo  = "Componente Peliculas";
    this.peliculas = [
      {year: 2019, title: 'La Dama y el Vagabundo', image: 'https://i.pinimg.com/originals/a6/78/b9/a678b98f488df4a4608461865bfe0ac1.jpg'},
      {year: 2020, title: 'Soul', image: 'https://ssl-static.libsyn.com/p/assets/f/b/4/a/fb4a527720081668/height_300_width_300_overlay_Soul_edit.jpg'},
      {year: 2008, title: 'Bee Movie', image: 'https://haleyshoneymeadery.com/wp-content/uploads/2018/09/beemoviebee-300x300.png'},
      {year: 1990, title: 'La Sirenita', image: 'https://www.cuentosinfantiles10.com/wp-content/uploads/2017/10/cuento-de-la-sirenita-ariel.jpg'}
    ]
  }

  ngOnInit(): void {
  }

}
