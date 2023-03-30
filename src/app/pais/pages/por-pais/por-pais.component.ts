import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';



@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})


export class PorPaisComponent {
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  placeholder: string = 'Buscar por país...';


  //Inyectamos el servicio
  constructor( private PaisService: PaisService){}

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

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
    //TODO: Crear sugerencias

  }
}
