import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  //lista de peliculas buscadas por titulo
  movies: any;
  
  //objeto detalles
  details: any;
  movieSearched: string  = '';
  windowDetails:any;
  
  //strings para crear ventana detalles
  titleD: string = '';
  releasedD: string = '';
  directorD: string = '';
  actorsD: string = '';
  plotD: string = '';
  posterD: string = '';

  //CSS style para ventana con detalles
  detailsCSS: string = `
  <head>
    <style>
      p {
        font-family:Arial, Helvetica, sans-serif;
        font-size: 25px;
      }
      h2{
        font-size: 45px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        padding: 5px;
      }
      .item1 {grid-area: title; background-color: rgb(131, 131, 241); width:max-content;}
      .item2 {grid-area: released; background-color: rgb(211, 208, 208);}
      .item3 {grid-area: director; background-color: rgb(211, 208, 208);}
      .item4 {grid-area: actor; background-color: rgb(211, 208, 208);}
      .item5 {grid-area: plot;background-color: rgb(211, 208, 208); }
      .item6 {grid-area: poster}
      
      
      .grid{
        display: grid;
        grid-template-areas: 
        'poster title title title tilte tilte tilte'
        'poster released released released released released released'
        'poster director director director director director director'
        'poster actor actor actor actor actor actor'
        'plot plot plot plot plot plot plot';
        padding: 15px;
        gap: 10px;
        border-color: black;
      }
      </style>
    </head>
  `


  constructor(private movieService: MovieServiceService){ }

  //metodo dado una pelicula, devuelve un objeto detalles con su informacion
  //crea una ventana nueva con dichos detalles
  getDetails(movie: any){
    console.log(movie.imdbID);
    this.movieService.getDetailsID(movie.imdbID)
    .then(details => this.details = details);
    this.titleD =`
    <div class="grid">
      <div class="item1"><h2>`+this.details.Title+'</h2></div>';
    this.releasedD = '<div class="item2"><p>Fecha lanzamiento: '+this.details.Released+'</p></div>';
    this.directorD = '<div class="item3"><p>Dirigida por: '+this.details.Director+'</p></div>';
    this.actorsD = '<div class="item4"><p>Actores principales: '+this.details.Actors+'</p></div>';
    this.plotD ='<div class="item5"><p> Trama: '+this.details.Plot+'</p></div>';
    this.posterD = '<div class="item6"><img src="'+this.details.Poster+'"></div></div>';

    this.windowDetails = window.open('',this.details.Title + '-details', 'width=600,height=400,left=200,top=200')
    this.windowDetails.document.body.innerHTML = this.detailsCSS+
    this.titleD+this.releasedD+this.directorD+this.actorsD+this.plotD+this.posterD;
  }
  
  //coge la String con el titulo buscado y manda una request a API para
  //buscar las peliculas que coinciden con la String
  searchMovie(title: string){
    this.movieService.findMovie(title)
    .then(res => this.movies = res.Search)
  }

  ngOnInit(): void {
    
  }
}
