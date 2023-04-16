import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})
export class AdicionarComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    name: '',
    power: 0,
    id: '',
  };

  emitCharacter(): void {
    console.log('emitCharacter character', this.character);
    this.onNewCharacter.emit(this.character);
    this.resetForm();
  }

  private resetForm(): void {
    this.character.name = '';
    this.character.power = 0;
  }
}
