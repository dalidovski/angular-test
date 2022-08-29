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

  constructor(private route: ActivatedRoute, private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.getCharacterById(this.route.snapshot.paramMap.get('id'));
  }

  getCharacterById(id: any) {
    console.log(id);
    this.dataService.getCharacterById(id).subscribe(character => {
      console.log(character);
      this.character = character;
    });
  }

  goBack() {
    history.back()
  }
}
