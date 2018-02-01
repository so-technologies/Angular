import {Component, ViewChild} from '@angular/core';
import {SearchService} from '../../../services/search.service';
import {ImageInfoPopupComponent} from './image-info-popup/image-info-popup.component';
import {MatDialog} from '@angular/material';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-gif-searcher',
  templateUrl: './image-searcher.component.html',
  styleUrls: ['./image-searcher.component.css']
})
export class ImageSearcherComponent {
  @ViewChild('scrollBar') scrollBar;
  config: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
  };
  public containerHeight: number = window.innerHeight - 160;
  public query: string;
  private offset: number = 0;
  private limit: number = 25;
  public images: any = [];
  private timeout: any = false;
  public loading: boolean = false;

  constructor(private searchService: SearchService, public dialog: MatDialog) {

  }

  public viewImage(index: number): void {
    this.images[index].date = new Date(this.images[index].datePublished).toDateString();
    this.dialog.open(ImageInfoPopupComponent, {
      data: {image: this.images[index]}
    });
  }

  public scroll() {
    if (this.images.length > 0) {
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
    this.searchService.searchImages(this.query, this.offset, this.limit)
      .subscribe(
        value => {
          this.loading = false;
          if (this.offset === 0) {
            this.scrollBar.directiveRef.scrollToTop();
            this.images = value['value'];
          } else {
            this.images.push(...value['value']);
          }
        }
      );
  }
}
