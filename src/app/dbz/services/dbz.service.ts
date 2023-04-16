import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: v4(),
      name: 'Gohan',
      power: 2500,
    },
    {
      id: v4(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: v4(),
      name: 'Trunks',
      power: 2400,
    },
    {
      id: v4(),
      name: 'Vegeta',
      power: 14500,
    },
  ];

  public receiveNewCharacter(character: Character): void {
    this.characters.push({
      ...character,
      id: v4()
    });
  }

  removePersonagem(character: Character): void {
    this.characters = this.characters.filter((c) => c !== character);
  }

  public get getCharacters(): Array<Character> {
    return this.characters;
  }
}
