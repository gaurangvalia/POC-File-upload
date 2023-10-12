import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ViewResponseComponent } from './view-response/view-response.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'file-upload'
  },
  {
    path:'file-upload',
    component:FileUploadComponent
  },
  {
    path:'view-images',
    component:ViewResponseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
