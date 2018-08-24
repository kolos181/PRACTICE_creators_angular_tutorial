import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Creator } from '../entities/Creator';
import { CreatorService } from '../../services/creator.service';

@Component({
  selector: 'app-creator-search',
  templateUrl: './creator-search.component.html',
  styleUrls: [ './creator-search.component.css' ]
})
export class CreatorSearchComponent implements OnInit {
  creators$: Observable<Creator[]>;
  private searchTerms = new Subject<string>();

  constructor(private creatorService: CreatorService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.creators$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.creatorService.searchCreators(term)),
    );
  }
}
