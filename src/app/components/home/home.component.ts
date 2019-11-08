import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones : any[] = [];
  loading:boolean;

  constructor( private spotifyService:SpotifyService) {

    this.loading = true;

    this.spotifyService.getNewReleases()
        .subscribe( (data:any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        });
   }

  ngOnInit() {
  }

}
