import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  signal,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'mtx-file-upload',
  exportAs: 'mtxFileUpload',
  host: {
    class: 'mtx-file-upload',
  },
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIcon, NgOptimizedImage],
})
export class MtxFileUpload {
  imageName = signal<string | null>(null);
  uploadPlaceholder = signal('Drag and Drop or click...');
  fileSize = signal(0);
  uploadProgress = signal(0);
  imagePreview = signal('');
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  selectedFile: File | null = null;
  uploadSuccess: boolean = false;
  uploadError: boolean = false;
  #snackBar = inject(MatSnackBar);

  fileChange(event: any): void {
    const file = event.target.files[0] as File | null;
    this.uploadFile(file);
  }
  fileDrop(event: DragEvent): void {
    event.preventDefault();
    // event.stopImmediatePropagation();
    const file = event.dataTransfer?.files[0] as File | null;
    this.uploadFile(file);
  }

  dragOver(event: DragEvent): void {
    event.preventDefault();
    // event.stopImmediatePropagation();
  }

  uploadFile(file: File | null): void {
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;
      this.fileSize.set(Math.round(file.size / 1024)); // Set file size in KB

      const reader = new FileReader();
      reader.onload = e => {
        this.imagePreview.set(e.target?.result as string); // Set image preview URL
      };
      reader.readAsDataURL(file);

      this.uploadSuccess = true;
      this.uploadError = false;
      this.imageName.set(file.name); // Set image name
    } else {
      this.uploadSuccess = false;
      this.uploadError = true;
      this.#snackBar.open('Only image files are supported!', 'Close', {
        duration: 3000,
        panelClass: 'error',
      });
    }
  }

  removeImage(): void {
    this.selectedFile = null;
    this.imageName.set('');
    this.fileSize.set(0);
    this.imagePreview.set('');
    this.uploadSuccess = false;
    this.uploadError = false;
    this.uploadProgress.set(0);
  }
}
