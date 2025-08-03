import { Component, OnInit } from '@angular/core';
import { ContactdetailsService } from '../../serivces/contactdetails.service';
import { Contact } from '../../models/contact.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../serivces/seo.service';

@Component({
  selector: 'app-getintouch',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './getintouch.component.html',
  styleUrl: './getintouch.component.css'
})
export class GetintouchComponent implements OnInit {
  contactData: Contact | null = null;
  isSubmitting = false;
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    date:''
  };
  constructor(private apiservice: ContactdetailsService, private seoService: SeoService) { }

  ngOnInit(): void {
    this.apiservice.getcontactdetails().subscribe({
      next: (data: any[]) => {
        if (data.length > 0 && data[0]) {
          this.contactData = data[0];
          this.seoService.setContactMetaTags(data[0]);
        }
      },
      error: (err) => {
        console.error('Error loading contact details:', err);
      }
    });
  }
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }
    const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  this.formData.date = today.toISOString().split('T')[0]

    this.isSubmitting = true;
    this.apiservice.postenquiry(this.formData).subscribe({
      next: (res) => {
        alert(res.message || 'Enquiry submitted successfully!');
        form.resetForm();
        this.isSubmitting = false;
      },
      error: (err) => {
        alert(err.error?.message || 'Something went wrong!');
        this.isSubmitting = false;
      }
    })
  }
}
