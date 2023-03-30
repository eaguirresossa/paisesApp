import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';



@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})


export class PorPaisComponent {
  termino             : string = "";
  hayError            : boolean = false;
  paises              : Country[] = [];
  paisesSugeridos     : Country[] = [];
  mostrarSugerencias  : boolean = false;

  placeholder         : string = 'Buscar por país...';


  //Inyectamos el servicio
  constructor( private PaisService: PaisService){}

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.PaisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      }
      );
  }

  sugerencias( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.PaisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 10),
        (err) => this.paisesSugeridos = []
      );
  }

  buscarSugerido( termino: string){
    this.buscar( termino );
  }
}
