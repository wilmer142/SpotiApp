import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas:any[] = [];
  loading:boolean;

  constructor( private spotifyService:SpotifyService) { }

  buscar(termino:string){
    console.log(termino);
    this.loading = true;
    this.spotifyService.getArtista(termino)
        .subscribe( (data:any) => {
          this.artistas = data;
          this.loading = false;
        });
  }

}
