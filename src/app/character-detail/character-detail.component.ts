import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse, Character } from '../data.interfaces';
import { DataService } from '../data.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent {

  character: Character = {};

  constructor() {}
}
