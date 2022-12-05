export class DetailsComponent{
    details: any;
    createWindow(details: any){
        this.details = details;
        const titleD = '<h2>'+this.details.Title+'</h2>';
        const releasedD = '<p>Fecha lanzamiento: '+this.details.Released+'</p>';
        const directorD = '<p>Dirigida por: '+this.details.Director+'</p>';
        const actorsD = '<p>Actores principales: '+this.details.Actors+'</p>';
        const plotD ='<p> Trama: '+this.details.Plot+'</p>';
        const posterD = '<img src="'+this.details.Poster+'">';
        return titleD+releasedD+directorD+actorsD+plotD+posterD;
    }
}