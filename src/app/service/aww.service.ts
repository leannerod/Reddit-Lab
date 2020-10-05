import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interface/post';


@Injectable({
  providedIn: 'root'
})
export class AwwService {
  constructor(private httpClient: HttpClient) { }

  getAwwData() {
    return this.httpClient.get('https://www.reddit.com/r/aww/.json');
  }
}
