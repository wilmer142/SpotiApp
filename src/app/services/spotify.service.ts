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
      'Authorization': 'Bearer BQDfgZcQ2t_ue3Fe4N-Xb94F1BDpFjgxB1OOsii0Nvcgq4wnIe5Ame5BtlTF0hLCYU8qNS9ZVmGKCsulP6com-bvMIqCGW9OCSjvt2U87dBwKnt9w39EduFV7iOburviE0tFjrto1sCeDKsDH-_pM9B0CV1MN8DUv2HDcg'
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
