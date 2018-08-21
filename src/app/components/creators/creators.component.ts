import {Component, OnInit} from '@angular/core';
import {Creator} from '../entities/Creator';
import {CREATORS} from '../mockDatabase/mock-creators';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  creators = CREATORS;

  selectedCreator: Creator;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(creator: Creator) {
    this.selectedCreator = creator;
  }
}
