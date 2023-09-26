import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
  @HostBinding('class.fileover') fileOver: boolean=false;
  @Output() fileDropped = new EventEmitter<any>();

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement)
    
   
  }
  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt:any) {
    this.el.nativeElement.style.border = '2px dashed #3cb4e7';
    // this.templateRef.elementRef.nativeElement.style['border'] = '1px solid red';
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt:any) {
    this.el.nativeElement.style.border = '1px dashed #c5c5c5';
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt:any) {
    this.el.nativeElement.style.border = '1px dashed #c5c5c5';
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
