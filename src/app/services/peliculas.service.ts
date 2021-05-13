import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula('La Dama y el Vagabundo', 2019, 'https://i.pinimg.com/originals/a6/78/b9/a678b98f488df4a4608461865bfe0ac1.jpg'),
            new Pelicula('Soul', 2020, 'https://ssl-static.libsyn.com/p/assets/f/b/4/a/fb4a527720081668/height_300_width_300_overlay_Soul_edit.jpg'),
            new Pelicula('Bee Movie', 2008,  'https://haleyshoneymeadery.com/wp-content/uploads/2018/09/beemoviebee-300x300.png'),
            new Pelicula('La Sirenita', 1994, 'https://www.cuentosinfantiles10.com/wp-content/uploads/2017/10/cuento-de-la-sirenita-ariel.jpg')
        ];
    }

    getPeliculas() {
        return this.peliculas;
    }

}