import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { 
  }
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable(); 

  showSpinner(){
    this.loadingSubject.next(true);
    document.body.style.overflow = 'hidden'
  }
  hideSpinner(){
    this.loadingSubject.next(false);
    document.body.style.overflow = 'auto'
  }
}
