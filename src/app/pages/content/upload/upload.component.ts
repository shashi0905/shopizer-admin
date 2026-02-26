import { Component, Input } from '@angular/core';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  @Input() multi: string

  @Input() onUpload = (files: File[]) => { };

  onSelect(event) {
    this.onUpload(event.addedFiles);
  }

}
