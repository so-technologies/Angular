import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {SearcherComponent} from './components/searcher/searcher.component';
import {FormsModule} from '@angular/forms';
import {SearchService} from './services/search.service';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {GifInfoPopupComponent} from './components/searcher/gif-searcher/gif-info-popup/gif-info-popup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {GifSearcherComponent} from './components/searcher/gif-searcher/gif-searcher.component';
import {VideoInfoPopupComponent} from './components/searcher/video-searcher/video-info-popup/video-info-popup.component';
import {VideoSearcherComponent} from './components/searcher/video-searcher/video-searcher.component';
import {YoutubeSafeUrlPipe} from './pipes/youtube-safe-url.pipe';
import {ImageInfoPopupComponent} from './components/searcher/image-searcher/image-info-popup/image-info-popup.component';
import {ImageSearcherComponent} from './components/searcher/image-searcher/image-searcher.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const appRoutes: Routes = [
  {path: '', component: SearcherComponent},
  {path: 'gifs', component: GifSearcherComponent},
  {path: 'video', component: VideoSearcherComponent},
  {path: 'images', component: ImageSearcherComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    GifInfoPopupComponent,
    VideoInfoPopupComponent,
    ImageInfoPopupComponent,
    GifSearcherComponent,
    VideoSearcherComponent,
    ImageSearcherComponent,
    YoutubeSafeUrlPipe
  ],
  entryComponents: [GifInfoPopupComponent, VideoInfoPopupComponent, ImageInfoPopupComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    SearchService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
