import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAnKxK57ymSJSHaF50YBfOaQVKzh7Nx0P9iVN8sqtV81BJ1XYxnFH9TRbtAtQEbJYikKlWHZF18bJiAzAQ'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
}
