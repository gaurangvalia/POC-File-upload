import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-response',
  templateUrl: './view-response.component.html',
  styleUrls: ['./view-response.component.scss']
})
export class ViewResponseComponent implements OnInit {
  images: any = [];
  imageList: any[] = []
  showImage: any;
  constructor(private fileUploadService: FileUploadService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // let data: any = []
    // let res = this.fileUploadService.getSesstion()
    // res.forEach((element: any) => {
    //   // let objectURL = 'data:image/jpeg;base64,' + element.file;
    //   data.push({
    //     filename: element.fileName,
    //     image: element.file,
    //     // image: this.sanitizer.bypassSecurityTrustUrl(objectURL),
    //     label: element.label,
    //     confidence: element.confidence,
    //     status: element.status
    //   })
    // })
    this.imageList = this.fileUploadService.getSesstion()
  }

  showByName(value: any) {
    this.fileUploadService.getFileByName(value).subscribe((response: any) => {
      let objectURL = 'data:image/jpeg;base64,' + response;
      this.showImage = this.sanitizer.bypassSecurityTrustUrl(objectURL)
    })
  }
}
