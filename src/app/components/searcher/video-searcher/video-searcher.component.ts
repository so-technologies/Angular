import {Component, ViewChild} from '@angular/core';
import {SearchService} from '../../../services/search.service';
import {VideoInfoPopupComponent} from './video-info-popup/video-info-popup.component';
import {MatDialog} from '@angular/material';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-video-searcher',
  templateUrl: './video-searcher.component.html',
  styleUrls: ['./video-searcher.component.css']
})
export class VideoSearcherComponent {
  @ViewChild('scrollBar') scrollBar;
  config: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
  };
  public containerHeight: number = window.innerHeight - 160;
  public query: string;
  private offset: any = 0;
  private limit: number = 25;
  public video: any = [];
  private timeout: any = false;
  public loading: boolean = false;

  constructor(private searchService: SearchService, public dialog: MatDialog) {

  }

  public viewVideo(index: number): void {
    this.video[index].date = this.toDate(this.video[index].snippet.publishedAt);
    this.dialog.open(VideoInfoPopupComponent, {
      data: {video: this.video[index]}
    });
  }

  public scroll() {
    if (this.video.length > 0) {
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

  private toDate(date: string) {
    return new Date(date).toDateString();
  }

  private startSearch() {
    this.searchService.searchVideo(this.query, this.offset, this.limit)
      .subscribe(
        value => {
          this.loading = false;
          if (this.offset === 0) {
            this.scrollBar.directiveRef.scrollToTop();
            this.video = value['items'];
          } else {
            this.video.push(...value['items']);
          }
          this.offset = value['nextPageToken'];
        }
      );
  }
}
