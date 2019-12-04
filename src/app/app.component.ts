import { Component } from '@angular/core';
import {IResult} from "./services/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-repo-search';
  public searchResult: IResult;
}
