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
  imageList:any[] = []
  constructor(private fileUploadService: FileUploadService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let data:any = []
    this.fileUploadService.getFiles().subscribe((res) => {

      res.forEach((element: any) => {
        let objectURL = 'data:image/jpeg;base64,' + element.base64;
        data.push({
          filename:element.filename,
          image:this.sanitizer.bypassSecurityTrustUrl(objectURL)
        })
      })
      debugger
      this.imageList = data
      // this.allImageGet()
    })
  }
  allImageGet(){
    this.imageList.forEach((element: any) => {
      debugger
      this.fileUploadService.getFileByName(element.filename).subscribe((rs: any) => {
        let objectURL = 'data:image/jpeg;base64,' + rs;
        // this.images.push(objectURL)
        console.log(objectURL);
        
      })
    });
  }
  arrayBufferToBase64(buffer: ArrayBuffer): string {
    const binary = String.fromCharCode(...new Uint8Array(buffer));
    return btoa(binary);
  }

  extentionOfImges(fileName: any) {
    // const extension = path.extname(fileName).toLowerCase();
    // switch (extension) {
    //   case '.jpg':
    //   case '.jpeg':
    //     return 'image/jpeg';
    //   case '.png':
    //     return 'image/png';
    //   case '.gif':
    //     return 'image/gif';
    //   default:
    //     return 'application/octet-stream';
    // }
  }
  getImage(objectURL: any) {
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
