import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor{

  constructor() { }

  /**Nota:
   * interceptor que va a interceptar las peticines http
   */

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    console.log('Paso por el interceptor');

    //estos headers van a enviar un token en todas las peticiones
    const headers = new HttpHeaders({
      'token-usuario' : 'AKDKDKJDJDJDJ555'
     });

     //creamos un clone de la req y le pasamos los headers
     const reqClone = req.clone({
      headers
     });

     //utilizamos el clone en el envio que envia los headers y maneja los errores de tosas las peticiones
      return next.handle( reqClone ).pipe(
        catchError( this.manejarError )
      )
  }


  //--------------------------------------------------------------
    //funcion para manejar los errores en todas las peticiones
    manejarError( error: HttpErrorResponse){
      //console.log('sucedio un error');
        console.warn(error);
      return throwError('error personalizado')
 }
}
