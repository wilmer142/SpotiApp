import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDplRgNGKNXyLO6sXMrL-pSFHCfka1mRSx2PrP-mVuvJ9WJhGRqbqSMSv7O7i8ObAr6ez2jRE9mnockqt4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }

  
  getArtista( termino:string ){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDplRgNGKNXyLO6sXMrL-pSFHCfka1mRSx2PrP-mVuvJ9WJhGRqbqSMSv7O7i8ObAr6ez2jRE9mnockqt4'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, {headers});
  }
}
