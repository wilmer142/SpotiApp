import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones : any[] = [];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor( private spotifyService:SpotifyService) {

    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases()
        .subscribe( (data:any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        }, (error => {
          this.error = error;
          this.mensajeError = error.error.error.message;
          this.loading = false;
        }));
  }

  ngOnInit() {
  }

}
