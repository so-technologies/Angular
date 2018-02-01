import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-image-info-popup',
  templateUrl: './image-info-popup.component.html',
  styleUrls: ['./image-info-popup.component.css']
})
export class ImageInfoPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<ImageInfoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  public close(): void {
    this.dialogRef.close();
  }

}
