import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  styleUrls: ['./example-viewer.scss'],
})
export class ExampleViewer implements OnInit, OnDestroy {
  @Input() type: string;
  @Input() exampleData: ExampleType;

  @ViewChild('demo', { read: ViewContainerRef, static: true }) demoRef: ViewContainerRef;
  demoComponentRef: ComponentRef<any>;

  /** Whether the source for the example is being displayed. */
  showSource = false;

  constructor(
    private readonly snackbar: MatSnackBar,
    private readonly copier: CopierService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.exampleData.component
    );
    this.demoComponentRef = this.demoRef.createComponent(componentFactory);
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
