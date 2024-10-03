import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchReponse } from '../interfaces/gifs.interfaces'

// const GIPHY_API_KEY = 'WvUn69D7HMmqtgNtRqJewSspQNdKGIvr';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'WvUn69D7HMmqtgNtRqJewSspQNdKGIvr';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) {
      return;
    }
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag)

    this.http.get<SearchReponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
        console.log({ gifs: this.gifsList });

      })






    // fetch('http://api.giphy.com/v1/gifs/search?api_key=WvUn69D7HMmqtgNtRqJewSspQNdKGIvr&q=Valorant&limit=10')
    //   .then(resp => resp.json())
    //   .then(data => console.log(data));

    // const resp = await fetch('http://api.giphy.com/v1/gifs/search?api_key=WvUn69D7HMmqtgNtRqJewSspQNdKGIvr&q=Valorant&limit=10')
    // const data = await resp.json();
    // console.log(data);
  }
}
