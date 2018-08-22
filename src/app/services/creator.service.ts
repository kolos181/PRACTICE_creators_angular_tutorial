import { Injectable } from '@angular/core';
import {CREATORS} from '../components/mockDatabase/mock-creators';
import {Creator} from '../components/entities/Creator';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {



  constructor(private messageService: MessageService) { }

  getCreators(): Observable<Creator[]> {
    this.messageService.addMessage('fetched creators');
    return of(CREATORS);
  }
}
