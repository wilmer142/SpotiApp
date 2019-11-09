import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { }

  getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAFUHWA3xqN-LOttVCfusun81cZ12CdrfUxb0xdFX3AUNIsj10as3YW2EI1qytQjz3bhBxmeJQeR-tEfHw'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items));
  }
  
  getArtistas( termino:string ){

    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
              .pipe( map( data => data['artists'].items ));
  }

  getArtista( id:string ){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id:string ){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
              .pipe( map( data => data['tracks'] ));

  }
}
