import { Injectable } from '@angular/core';
import {CREATORS} from '../components/mockDatabase/mock-creators';
import {Creator} from '../components/entities/Creator';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {



  constructor() { }

  getCreators(): Creator[] {
    return CREATORS;
  }
}
