import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Model
import { Opportunity } from 'src/app/shared/opportunity.model';

// Environment
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {
  
  baseUrl = environment.apiUrl + "/";

  cachedLastOpportunities = new BehaviorSubject<Opportunity[]>(null);
  cachedLastOpportunities$ = this.cachedLastOpportunities.asObservable();

  lastOpportunitiesSub: Subscription = null;

  constructor(public httpClient: HttpClient) { }

  getOpportunities(): Observable<Opportunity[] | HttpErrorResponse> {

    let headers = new HttpHeaders();
    headers.append('Access-Control-Request-Method', 'GET');
    
    const options = {
      headers: headers
    }

    console.log('call /opportunities');
    return this.httpClient.get(this.baseUrl + "opportunities", options)
      .pipe(
        map((data) => this.parseOpportunityData(data)),
        map((data) => data as Opportunity[]),
        catchError((error: HttpErrorResponse) => { console.log(error); return throwError(error) })
      )
  }

  getLastOpportunities(): Observable<Opportunity[]> {
    if(!this.cachedLastOpportunities.getValue() && !this.lastOpportunitiesSub) {
      this.lastOpportunitiesSub = this.getOpportunities()
        .pipe(
          map(this.fetchLastOpportunities),
          map(this.sortLastIndexFirst)
        )
        .subscribe((result) => {
          this.cachedLastOpportunities.next(result);
  
          this.lastOpportunitiesSub.unsubscribe();
          this.lastOpportunitiesSub = null;
        });
    }

    return this.cachedLastOpportunities$;
  }

  fetchLastOpportunities = (data: Array<any>) => {
    const numItems = 6;
    let startIndex = data.length - numItems;
    return data.splice(startIndex, numItems);
  }

  sortLastIndexFirst = (data: Array<any>) => {
    return data.sort((a, b) => b.index - a.index);
  }

  parseOpportunityData(data: any) {
    data.forEach((opportunity) => {
      opportunity.salary = this.salaryStringToNumber(opportunity.salary);
    });
    return data;
  }

  salaryStringToNumber = (originalValue: string): number => {
    let newValue = originalValue.replace(',', '');
    let salary = Number.parseFloat(newValue);
    return salary;
  }

}
