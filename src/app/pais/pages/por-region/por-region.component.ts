import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];


  //Inyectamos el servicio
  constructor( private PaisService: PaisService){}

  getClaseCSS (region: string ): string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion ( region: string){
    this.regionActiva = region;
    //TODO: hacer el llamado al servicio
  }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarRegion(this.termino)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      }
      );
  }

}
