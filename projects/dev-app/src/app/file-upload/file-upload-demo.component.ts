import { Component } from '@angular/core';
import { MtxFileUpload } from '@dcnx/mat-extensions/file-upload';

@Component({
  selector: 'dev-file-upload-demo',
  templateUrl: 'file-upload-demo.component.html',
  styleUrl: 'file-upload-demo.component.scss',
  standalone: true,
  imports: [MtxFileUpload],
})
export class FileUploadDemoComponent {}
