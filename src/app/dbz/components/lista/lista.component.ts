import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  @Output()
  public onRemoveCharacter: EventEmitter<Character> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];

  removeCharacter(character: Character): void {
    console.log('removeCharacter character', character);

    this.onRemoveCharacter.emit(character);
  }
}
