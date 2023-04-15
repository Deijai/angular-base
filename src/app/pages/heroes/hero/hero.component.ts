import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'batman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeName(): void {
    this.name = 'Super Man'
  }

  public changeAge(): void {
    this.age = 42;
  }

  public resetData(): void {
    this.age = 45;
    this.name = 'batman';
  }
}
