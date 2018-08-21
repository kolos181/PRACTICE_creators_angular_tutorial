import {Component, Input, OnInit} from '@angular/core';
import {Creator} from '../entities/Creator';

@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.css']
})
export class CreatorDetailComponent implements OnInit {

  @Input() creator: Creator;

  constructor() { }

  ngOnInit() {
  }

}
