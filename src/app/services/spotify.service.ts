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
      'Authorization': 'Bearer BQCnQtBtWqdqUkj-o2z6uPdiirYLQcTwL7dPeQwwHJPuvFN_Pzl0CHvbps8LFaUlKmiHB9aWW9CyV9OEfSk'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items));
  }
  
  getArtista( termino:string ){

    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
              .pipe( map( data => data['artists'].items ));

  }
}
