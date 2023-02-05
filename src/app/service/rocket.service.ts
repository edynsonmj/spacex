import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'
import { formatNumber } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';

let service: string = 'http://localhost:3000/rockets';
let rockets: Array<RocketInterface> = [];

export interface RocketInterface {
  id: number;
  name: string;
  description: string;
  height: number;
  country: string;
  flickr_images: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor(private http: HttpClient) { }

  get() {
    return rockets.slice();
  }

  async load() {
    //return this.http.get<Array<RocketInterface>>(service);    
    let listaRocktes = await axios({
      method: 'get',
      url: service,
    });
    return listaRocktes.data;
  }

  async add(rocket: RocketInterface) {
    let respuesta = await axios({
      method: "post",
      url: service,
      data: rocket
    });
    console.log(respuesta.status);
  }

  async remove(rocket: RocketInterface) {
    let respuesta = await axios({
      method: 'delete',
      url: service + '/' + rocket.id,
    });
    console.log("eliminacion");
    console.log(respuesta.status);
  }

  async getById(id: number) {
    let miCadena = id.toString()
    miCadena = miCadena.replace(/["']/g, "");
    let num = parseInt(miCadena);
    let respuesta = await axios({
      method: 'get',
      url: service + '/' + num
    });
    return respuesta.data;
  }
  async update(rocket: RocketInterface) {
    //let respuesta = await axios({});
    try {
      let respuesta = await axios({
        method: 'update',
        url: service + '/' + rocket.id,
        data: rocket,
      });
      console.log("mi respuesta", respuesta);
      return true;
    } catch (e) {
      console.log("error de cors policy, activar extension seria buena opcion, listar, eliminar y crear no generan este problema")
      return false;
    }
  }
}
