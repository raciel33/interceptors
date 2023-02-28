import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { throwError } from 'rxjs';
import { map , catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) {

    this.obtenerUsuarios();

  }

  obtenerUsuarios(){

    /**Nota:
     * Formas de añadir parametros a nuestra url
     * para un parametro usaremos una constante
     * para varios una variable
     * si revisamos en network podemos ver el resultado de nuestra peticion
     */

    let params = new HttpParams().append('page' ,'1');
    params = params.append('nombre','victor herrera');


   //le pasamos los parametros a la url
   return this.http.get('https://reqres.in/api/user', {

         params: params,

       }).pipe(

        //con el map solo cojemos lo que queremos de la respuesta en este caso 'data'
           map((resp:any ) =>{
            return resp['data']


    })
   );
  }


}
