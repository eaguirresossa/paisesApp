import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styles: [
  ]
})
export class AllComponent implements OnInit {

  paises              : Country[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ){}

  ngOnInit(){
      this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.paisService.getAll() ),
          tap(console.log) //El tap toma lo del switchMap
        )
        //.subscribe( resp => {console.log(resp);});
        .subscribe( (paises) => {
          console.log(paises);
          this.paises = paises;
        }, (err) => {
          this.paises = [];
        }
        );
  }

}
