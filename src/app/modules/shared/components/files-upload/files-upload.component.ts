import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { FileItem } from '../../../../../model/filte';
import { SwaggerService } from '../../../../swagger/swagger.service';
import { SnackbarService } from '../../../../services/snackbar.service';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrl: './files-upload.component.scss'
})
export class FilesUploadComponent {
  @Input() control: FormControl = new FormControl([]);
  @Input() oldFiles: FileItem[] = [];

  constructor(
    private swagger: SwaggerService,
    private snackbar: SnackbarService,
  ){

  }
  getFileIcon(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();

    switch (extension) {
      case 'pdf':
        return '📄'; // PDF Icon
      case 'doc':
      case 'docx':
        return '📝'; // Word Document Icon
      case 'xls':
      case 'xlsx':
        return '📊'; // Excel File Icon
      case 'ppt':
      case 'pptx':
        return '📽️'; // PowerPoint Icon
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return '🖼️'; // Image Icon
      case 'mp4':
      case 'mov':
        return '🎥'; // Video Icon
      case 'mp3':
      case 'wav':
        return '🎵'; // Audio Icon
      case 'zip':
      case 'rar':
        return '📦'; // Compressed File Icon
      default:
        return '📁'; // Default File Icon
    }
  }


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const filesArray = Array.from(input.files);

      // ✅ Merge files and remove duplicates based on file name
      const updatedFiles = [...this.control.value, ...filesArray].filter(
        (file, index, self) => index === self.findIndex(f => f.name === file.name)
      );

      this.control.setValue(updatedFiles);
    }
  }

  /** ✅ Remove File */
  removeFile(index: number) {
    this.selectedFiles.splice(index, 1); // Remove from array
    this.control.setValue([...this.selectedFiles]); // Update FormControl
  }

  get selectedFiles(): File[] {
    return this.control.value as File[]
  };

  deleteOldFile(id){
    const index = this.oldFiles.findIndex(res => res.id == id);
    this.oldFiles.splice(index, 1);

    this.swagger.deleteFile(id)
    .subscribe(res=>{
      this.snackbar.showSuccessSnackbar('تم حذف الملف بنجاح');
    }, error=>{
      this.snackbar.showError(error.message);
    })
  }
}
