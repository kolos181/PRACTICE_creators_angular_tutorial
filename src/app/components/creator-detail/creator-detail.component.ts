import {Component, Input, OnInit} from '@angular/core';
import {Creator} from '../entities/Creator';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CreatorService} from '../../services/creator.service';

@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.css']
})
export class CreatorDetailComponent implements OnInit {

  @Input() creator: Creator;

  constructor(private creatorService: CreatorService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCreator();
  }

  private getCreator() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.creatorService.getCreator(id).subscribe(creator => this.creator = creator);
  }

  save(): void {
    this.creatorService.updateCreator(this.creator).subscribe(() => this.goBack());
  }

  private goBack() {
    this.location.back();
  }
}
