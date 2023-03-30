import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country, Idd } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {


  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ){}

  ngOnInit(){

    /*
    this.activatedRoute.params
      .subscribe( ({ id }) =>{
        console.log(id);
        this.paisService.getPaisPorAlpha(id)
          .subscribe( pais => {
            console.log(pais);
          });

      } )
    */

      //Lo anterior se puede hacer con la sgte linea

      this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) ),
          tap(console.log) //El tap toma lo del switchMap
        )
        //.subscribe( resp => {console.log(resp);});
        .subscribe( pais => { this.pais = pais[0] });
  }


}
