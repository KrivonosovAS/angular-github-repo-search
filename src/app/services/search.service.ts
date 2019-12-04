import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) {
  }

  public searchRepo(keyword: string): Observable<IResult> {
    return this.http.get<IResult>('search/repositories?q=' + keyword);
  }
}

export interface IResult {
  "total_count": number,
  "incomplete_results": boolean,
  "items": IRepo[]
}

export interface IRepo {
  "id": number,
  "node_id": string,
  "name": string,
  "full_name": string,
  "private": boolean,
  "owner": {
    "login": string,
    "id": number,
    "node_id": string,
    "avatar_url": string,
    "gravatar_id": string,
    "url": string,
    "html_url": string,
    "followers_url": string,
    "following_url": string,
    "gists_url": string,
    "starred_url": string,
    "subscriptions_url": string,
    "organizations_url": string,
    "repos_url": string,
    "events_url": string,
    "received_events_url": string,
    "type": string,
    "site_admin": boolean
  },
  "html_url": string,
  "description": string,
  "fork": boolean,
  "url": string,
  "git_url": string,
  "ssh_url": string,
  "homepage": string,
  "stargazers_count": number,
  "watchers_count": number,
  "language": string,
  "has_pages": boolean
}
