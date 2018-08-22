import { Component, OnInit } from '@angular/core';
import {Creator} from '../entities/Creator';
import {CreatorService} from '../../services/creator.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  creators: Creator[] = [];

  constructor(private creatorService: CreatorService) { }

  ngOnInit() {
    this.getCreators();
  }

  private getCreators() {
    this.creatorService.getCreators().subscribe(creators => {
      this.creators = creators.slice(1,5);
    });
  }
}
