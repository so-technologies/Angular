import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-video-info-popup',
  templateUrl: './video-info-popup.component.html',
  styleUrls: ['./video-info-popup.component.css']
})
export class VideoInfoPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<VideoInfoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  public close(): void {
    this.dialogRef.close();
  }

}
