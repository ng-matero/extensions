import {
  Component,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CopierService } from '../copier/copier.service';

export interface ExampleType {
  title: string;
  description: string;
  component: any;
  deps?: string[];
  debug?: boolean;
  files: {
    file: string;
    content?: string;
    filecontent: { default: string };
  }[];
}

@Component({
  selector: 'example-viewer',
  templateUrl: './example-viewer.html',
  styleUrl: './example-viewer.scss',
  imports: [MatIconButton, MatTooltipModule, MatIconModule, MatTabsModule],
})
export class ExampleViewer implements OnInit, OnDestroy {
  private readonly snackbar = inject(MatSnackBar);
  private readonly copier = inject(CopierService);

  @Input() type!: string;
  @Input() exampleData!: ExampleType;

  @ViewChild('demo', { read: ViewContainerRef, static: true }) demoRef!: ViewContainerRef;
  demoComponentRef!: ComponentRef<any>;

  /** Whether the source for the example is being displayed. */
  showSource = false;

  ngOnInit() {
    this.demoComponentRef = this.demoRef.createComponent(this.exampleData.component);
  }

  ngOnDestroy() {
    if (this.demoComponentRef) {
      this.demoComponentRef.destroy();
    }
  }

  toggleSourceView() {
    this.showSource = !this.showSource;
  }

  copySource(content: any) {
    if (this.copier.copyText(content.innerText)) {
      this.snackbar.open('Code copied', '', { duration: 2500 });
    } else {
      this.snackbar.open('Copy failed. Please try again!', '', { duration: 2500 });
    }
  }
}
