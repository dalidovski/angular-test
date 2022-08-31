import { Component } from '@angular/core';
import { Character } from '../data.interfaces';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent {
  character: Character = {};

  constructor() {}
}
