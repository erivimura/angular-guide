import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string = '';
  public apellido: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    //Obtiene datos de la ruta
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellido = params.apellido;
    });

  }

  redirect() {
    this._router.navigate(['/formulario']); //Redirige a pagina formulario
    //this._router.navigate(['/pagina', 'Erika']); //Redirige a pagina actual + parametros
  }

}