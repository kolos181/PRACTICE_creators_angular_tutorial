import {Injectable} from '@angular/core';
import {Creator} from '../components/entities/Creator';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CreatorService {

  private creatorsUrl = 'api/creators';


  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  getCreators(): Observable<Creator[]> {
    this.messageService.addMessage('fetched creators');
    return this.http.get<Creator[]>(this.creatorsUrl).pipe(tap(creators => this.log('fetched creators')),
      catchError(this.handleError('getCreators', [])));
  }

  getCreator(id: number): Observable<Creator> {
    const url = `${this.creatorsUrl}/${id}`;
    return this.http.get<Creator>(url).pipe(
      tap(_ => this.log(`fetched creator id=${id}`)),
      catchError(this.handleError<Creator>(`getCreator id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.addMessage(`CreatorService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateCreator(creator: Creator): Observable<Creator> {
    return this.http.put<Creator>(this.creatorsUrl, creator, httpOptions).pipe(
      tap(_ => this.log(`updated creator id=${creator.id}`)),
      catchError(this.handleError<any>('updateCreator'))
    );
  }

  addCreator(creator: Creator) {
    return this.http.post<Creator>(this.creatorsUrl, creator, httpOptions).pipe(
      tap((creator: Creator) => this.log(`added creator w/ id=${creator.id}`)),
      catchError(this.handleError<Creator>('addCreator'))
    );
  }

  deleteCreator (creator: Creator | number): Observable<Creator> {
    const id = typeof creator === 'number' ? creator : creator.id;
    const url = `${this.creatorsUrl}/${id}`;

    return this.http.delete<Creator>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted creator id=${id}`)),
      catchError(this.handleError<Creator>('deleteCreator'))
    );
  }

  searchCreators(term: string): Observable<Creator[]> {
    if (!term.trim()) {
      // if not search term, return empty creator array.
      return of([]);
    }
    return this.http.get<Creator[]>(`${this.creatorsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found creators matching "${term}"`)),
      catchError(this.handleError<Creator[]>('searchCreators', []))
    );
  }
}
