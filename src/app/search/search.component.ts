import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IResult, SearchService} from "../services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(
    private searchService: SearchService
  ) {
  }

  @Output()
  public reposSearchResultEvent = new EventEmitter<IResult>();

  public showLoader: boolean;

  public search(keyword: string): void{
    this.showLoader = true;
    this.searchService.searchRepo(keyword).subscribe(( response: IResult ) => {
        this.reposSearchResultEvent.emit(response);
        this.showLoader = false;
    });
  }

}

