import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  file: any;
  fileName: any;
  isValid = true
  constructor(private fileUploadService: FileUploadService, private toastr: ToastrService,private router: Router) { }

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

  prepareFilesList(files: any) {
    this.file = files
    this.fileName = files[0].name
    // to-do
    // for (const item of files) {
    //   this.files.push(item);
    // }
  }

  removeCurrentFile() {
    this.file = null;
  }

  onSubmit() {
    let base64Img: any;
    const reader = new FileReader();
    reader.readAsDataURL(this.file[0]);
    reader.onload = () => {
     base64Img = reader.result;
    }
    this.fileUploadService.addFile(this.file[0]).subscribe((response) => {
      let data = {
        file: base64Img,
        fileName: this.fileName,
        label: response.label,
        confidence: Math.round((response.score / 1) * 100),
        status: response.message
      }
      this.fileUploadService.setSesstion(data)
      this.toastr.success('File upload successfully.');
      this.router.navigate(['./view-images'])
    });
  }
}
