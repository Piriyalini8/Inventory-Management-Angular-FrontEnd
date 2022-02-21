import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  changeId(id: number) {
    this.messageSource.next(id)
  }
}
