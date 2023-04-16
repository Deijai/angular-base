import { DbzService } from './../../services/dbz.service';
import { Character } from './../../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  public receiveNewCharacter(character: Character): void {
    this.dbzService.receiveNewCharacter(character);
  }

  public removePersonagem(character: Character): void {
    this.dbzService.removePersonagem(character);
  }

  public get getCharacters(): Array<Character> {
    return this.dbzService.getCharacters || [];
  }
}
