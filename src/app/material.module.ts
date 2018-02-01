
import { NgModule } from '@angular/core';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule
  ],
})
export class MaterialModule { }
