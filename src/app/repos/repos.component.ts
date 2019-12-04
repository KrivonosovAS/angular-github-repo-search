import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IRepo, IResult} from "../services/search.service";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnChanges {

  @Input()
  public result: IResult;
  public currentPage: IRepo[];
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  public setPage(pageSize: number, pageIndex:number){
    this.currentPage = this.result.items.slice( pageSize*pageIndex, pageSize*pageIndex + pageSize);
  }

  ngOnChanges(): void {
    if(this.result){
      this.setPage(10, 0);
    }
    console.log(this.currentPage)
  }
}
