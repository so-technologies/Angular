import {Component, ViewChild} from '@angular/core';
import {SearchService} from '../../../services/search.service';
import {GifInfoPopupComponent} from './gif-info-popup/gif-info-popup.component';
import {MatDialog} from '@angular/material';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-gif-searcher',
  templateUrl: './gif-searcher.component.html',
  styleUrls: ['./gif-searcher.component.css']
})
export class GifSearcherComponent {
  @ViewChild('scrollBar') scrollBar;
  config: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
  };
  public containerHeight: number = window.innerHeight - 160;
  public query: string;
  private offset: number = 0;
  private limit: number = 25;
  public gifs: any = [];
  private timeout: any = false;
  public loading: boolean = false;

  constructor(private searchService: SearchService, public dialog: MatDialog) {

  }

  public viewGif(index: number): void {
    this.dialog.open(GifInfoPopupComponent, {
      data: {gif: this.gifs[index]}
    });
  }

  public scroll() {
    if (this.gifs.length > 0) {
      this.offset += this.limit;
      this.loading = true;
      this.startSearch();
    }
  }

  public search() {
    this.loading = true;
    this.offset = 0;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.startSearch();
    }, 1000);
  }

  private startSearch() {
    this.searchService.searchGifs(this.query, this.offset, this.limit)
      .subscribe(
        value => {
          this.loading = false;
          if (this.offset === 0) {
            this.scrollBar.directiveRef.scrollToTop();
            this.gifs = value['data'];
          } else {
            this.gifs.push(...value['data']);
          }
        }
      );
  }
}
