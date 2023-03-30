import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {


  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]>{
    const url = `${ this.apiURL }/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha( id: string): Observable<Country>{
    const url = `${ this.apiURL }/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarCapital( termino: string): Observable<Country[]>{
    const url = `${ this.apiURL }/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion( region: string): Observable<Country[]>{

    // const params = new HttpParams()
    //   .set( 'fields', 'name,capital,flag,cca2;population' );

    const url = `${ this.apiURL }/region/${region}`;

    //Con esta línea podemos filtrar el campos a buscar
    //return this.http.get<Country[]>(url, { params: params });
    return this.http.get<Country[]>(url);
  }

  getAll(): Observable<Country[]>{
    const url = `${ this.apiURL }/all/`;
    return this.http.get<Country[]>(url);
  }


}
