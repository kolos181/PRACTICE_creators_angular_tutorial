import {Component, OnInit} from '@angular/core';
import {Creator} from '../entities/Creator';
import {CreatorService} from '../../services/creator.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  creators: Creator[];

  constructor(private creatorService: CreatorService) {
  }

  ngOnInit() {
    this.getCreators();
  }


  getCreators(): void {
    this.creatorService.getCreators().subscribe(creators => this.creators = creators)
  }
}
