import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Hospital } from '../../models/hospital.model';
import swal from 'sweetalert';


@Injectable()
export class HospitalService {
  totalHospitales: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioServive: UsuarioService
  ) { }

  cargarHospitales() {
    let url = URL_SERVICIOS + '/hospital';
    return this.http.get(url)
    .pipe(map((resp: any) => {
      this.totalHospitales = resp.total;
      return resp.hospitales;
    }));
  }

  obtenerHospital( id: string ) {
    let url = URL_SERVICIOS + '/hospital/' + id;
    return this.http.get(url)
    .pipe(map((resp: any) => resp.hospital));
  }

  borrarHospital(id: string) {
    let url = URL_SERVICIOS + '/hospital/' + id;
    url += '?token=' + this._usuarioServive.token;
    return this.http.delete(url)
    .pipe(map((resp: any) => swal('Hospital Borrado', 'Eliminado corectamente', 'success')
    ));
  }

  crearHospital(nombre: string) {
    let url = URL_SERVICIOS + '/hospital';
    url += '?token=' + this._usuarioServive.token;
    return this.http.post(url, {nombre})
    .pipe(map((resp: any) => resp.hospital
    ));
  }

  buscarHospital(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
    return this.http.get(url)
    .pipe(map((resp: any) => resp.hospitales
    ));
  }

  actualizarHospital(hospital: Hospital) {
    let url = URL_SERVICIOS + '/hospital/' + hospital._id;
    url += '?token=' + this._usuarioServive.token;
    return this.http.put(url, hospital)
    .pipe(map((resp: any) => {
      swal('Hospital Actualizado', hospital.nombre, 'success');
      return resp.hospital;
    }));
  }
}
