import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptor';

  constructor(private usuarioServices: UsuariosService){

    this.usuarioServices.obtenerUsuarios().subscribe( resp=>{
     console.log(resp);
    },(err )=>{
      console.log('error en el app.components');
    })

  }


}
