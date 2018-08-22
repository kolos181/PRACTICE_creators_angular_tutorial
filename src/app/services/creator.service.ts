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

  getCreator(id: number) {
    // TODO: send the message _after_ fetching the hero
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(CREATORS.find(patient => patient.id === id));
  }
}
