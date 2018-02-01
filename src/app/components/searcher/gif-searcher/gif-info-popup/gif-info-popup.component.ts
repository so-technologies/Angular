import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-gif-info-popup',
  templateUrl: './gif-info-popup.component.html',
  styleUrls: ['./gif-info-popup.component.css']
})
export class GifInfoPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<GifInfoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  public close(): void {
    this.dialogRef.close();
  }

}
