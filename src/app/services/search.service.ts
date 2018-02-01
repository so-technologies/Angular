import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class SearchService {
  private API_GIPHY_KEY = 'TWUFTsRt2XQ86wScEYC51LgHraNEygZp';
  private API_YOUTUBE_KEY = 'AIzaSyDbZOGbxkLou0F_LJyKXvFF1quIVBCN4gs';
  private API_BING_KEY = '6e033a8edc8f4ef5a6b432c69e4d9d52';
  private GIPHY_URL = 'https://api.giphy.com/v1/gifs/search?';
  private YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?';
  private BING_URL = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search?';
  constructor(private httpClient: HttpClient) {}

  public searchGifs(query, offset = 0, limit = 25) {
    const url = this.GIPHY_URL + `api_key=${this.API_GIPHY_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=G&lang=en`;
    return this.httpClient.get(url);
  }

  public searchVideo(query, offset = 0, limit = 25) {
    let url = this.YOUTUBE_URL + `part=snippet&key=${this.API_YOUTUBE_KEY}&q=${query}&maxResults=${limit}&type=video`;
    if (offset !== 0) {
      url += `&pageToken=${offset}`;
    }
    return this.httpClient.get(url);
  }

  public searchImages(query, offset = 0, limit = 25) {
    const headers = {
      'Ocp-Apim-Subscription-Key' : this.API_BING_KEY
    };
    const url = this.BING_URL + `q=${query}&offset=${offset}&count=${limit}`;
    return this.httpClient.get(url, {headers: headers});
  }
}
