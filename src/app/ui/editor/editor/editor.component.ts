import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  AfterViewInit,
  SimpleChanges,
  ViewChild, ElementRef, HostBinding, Input, Output, EventEmitter, HostListener
} from '@angular/core';


@Component({
  selector: 'mac-editor',
  templateUrl: './editor.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnChanges, AfterViewInit {

  @ViewChild('editableContentElement', {static: false}) editableContentElement: ElementRef;
  @HostBinding('class.edit-mode') editMode = false;
  @Input() content: string;
  @Input() showControls: boolean;
  @Output() outSaveEdit = new EventEmitter<string>();
  @Output() outCancelEdit = new EventEmitter<never>();

  constructor() { }

  ngAfterViewInit(): void {
    this.setEditableContent(this.content);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.content && this.editableContentElement) {
      this.setEditableContent(this.content);
    }
  }

  beginEdit() {
    this.editMode = true;
  }

  saveEdit() {
    this.editMode = false;
    this.outSaveEdit.emit(this.getEditableContent());
  }

  cancelEdit() {
    this.editMode = false;
    this.setEditableContent(this.content);
    this.outCancelEdit.emit();
  }

  @HostListener('click')
  focusEditableContent() {
    if (this.editMode) {
      (this.editableContentElement.nativeElement as HTMLElement).focus();
    }
  }

  private getEditableContent(): string {
    return (this.editableContentElement.nativeElement as HTMLElement).textContent;
  }

  private setEditableContent(content: string): void {
    (this.editableContentElement.nativeElement as HTMLElement).textContent = content;
  }
}
