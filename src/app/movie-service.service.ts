import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class MovieServiceService {
  URL: string  = 'https://www.omdbapi.com/?i=';
  APIKey: String = '&apikey=dca76d81';


  //envia peticion a la API para recuperar los detalles de
  //la pelicula buscada por su imdbID
  getDetailsID(imdbID: string){
    const url = this.URL+imdbID+this.APIKey;
    return fetch(url)
    .then(response => response.json())
  }

//envia peticion a Search de la API para devolver los resultados
//que coinciden con la String title
  findMovie(title: string){
  return fetch('https://www.omdbapi.com/?s='+title+'&apikey=dca76d81')
          .then(response => response.json())
  }
  constructor() { }
}
