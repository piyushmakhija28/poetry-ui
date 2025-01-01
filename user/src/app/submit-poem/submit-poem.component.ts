import { Component } from '@angular/core';
import { PoetryForm } from '../form/poetry-form';
import { PoetryService } from '../services/poetry.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-submit-poem',
  templateUrl: './submit-poem.component.html',
  styleUrls: ['./submit-poem.component.css']
})
export class SubmitPoemComponent {

  poetryForm: PoetryForm = {
    title: '',
    description: '',
    imageUrl: '',
    category: 'MISC',
    tags:''
  }

  constructor(private poetryService:PoetryService,private toastrService:ToastrService){}

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.poetryForm.imageUrl = reader.result as string;
      };

      reader.onerror = (error) => {
        console.error('Error converting file to base64:', error);
      };

      reader.readAsDataURL(file); // Converts the file to base64 string
    }
  }

  submit() {
    this.poetryService.submitPoem(this.poetryForm).subscribe(data=>{
      this.toastrService.success(data.message,'Success');
    });
  }

}
