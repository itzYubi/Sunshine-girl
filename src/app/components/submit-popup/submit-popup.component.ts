import { Component } from '@angular/core';
import { FormSubmitService } from 'src/app/service/form-submit.service';

@Component({
  selector: 'app-submit-popup',
  templateUrl: './submit-popup.component.html',
  styleUrls: ['./submit-popup.component.css']
})
export class SubmitPopupComponent {

  protected togglePopup = false;

  constructor(private formSubmitService: FormSubmitService) {
    this.formSubmitService.toggleSubmit$.subscribe(data => {
      this.togglePopup = data;
    });
  }

  onCancel() {
    this.togglePopup = !this.togglePopup;
  }

}
