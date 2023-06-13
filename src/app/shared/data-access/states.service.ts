import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  private activePageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private activePage$: Observable<string> = this.activePageSubject.asObservable();

  constructor() { }

  public setActivePage(pageKey: string): void {
    this.activePageSubject.next(pageKey);
  }

  public clearActivePage(): void {
    this.activePageSubject.next('');
  }

  public getActivePage(): Observable<string> {
    return this.activePage$;
  }
}
