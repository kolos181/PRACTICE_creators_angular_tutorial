import { Injectable } from '@angular/core';
import {CREATORS} from '../components/mockDatabase/mock-creators';
import {Creator} from '../components/entities/Creator';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {

  private creatorsUrl = 'api/creators';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getCreators(): Observable<Creator[]> {
    this.messageService.addMessage('fetched creators');
    return this.http.get<Creator[]>(this.creatorsUrl).pipe(tap(creators => this.log('fetched creators')),
      catchError(this.handleError('getCreators',[])));
  }

  getCreator(id: number):Observable<Creator> {
    const url = `${this.creatorsUrl}/${id}`;
    return this.http.get<Creator>(url).pipe(
      tap(_ => this.log(`fetched creator id=${id}`)),
      catchError(this.handleError<Creator>(`getCreator id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.addMessage(`CreatorService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
