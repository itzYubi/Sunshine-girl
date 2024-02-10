import { Component } from '@angular/core';
import { FormSubmitService } from 'src/app/service/form-submit.service';

@Component({
  selector: 'app-sunshine-request-form',
  templateUrl: './sunshine-request-form.component.html',
  styleUrls: ['./sunshine-request-form.component.css']
})
export class SunshineRequestFormComponent {
  private toggleSubmit = false;

  constructor(private formSubmitService: FormSubmitService) {
  }

  getToday() {
    return new Date().toISOString().split('T')[0];
  }

  togglePopup(event: Event) {
    this.toggleSubmit = !this.toggleSubmit;
    this.formSubmitService.sendToggleRequest(this.toggleSubmit);
    event.preventDefault();
  }
}
