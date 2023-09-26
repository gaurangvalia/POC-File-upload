import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  files: any[] = [];
  isValid = true
  constructor(private fileUploadService:FileUploadService) { }

  ngOnInit(): void {
  }
  /**
    * on file drop handler
    */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any) {
    this.prepareFilesList(files.target.files);
  }
  prepareFilesList(files: Array<any>) {
    let size = 0;
    for (const item of files) {
      this.files.push(item);
    }
  }

  removeCurrentFile(index: any) {
    this.files.splice(index, 1);
  }

  onSubmit(){

  }
}
