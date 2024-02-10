import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {

  private toggleSubmitSubject = new Subject<boolean>();
  toggleSubmit$ = this.toggleSubmitSubject.asObservable();

  constructor() { }

  sendToggleRequest(toggleSubmit: boolean) {
    this.toggleSubmitSubject.next(toggleSubmit);
  }
}
