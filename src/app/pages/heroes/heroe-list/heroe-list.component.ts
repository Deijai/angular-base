import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.css']
})
export class HeroeListComponent {

  public heroes: string[] = ['Super Man', 'Batman', 'flash', 'Arrow', 'Thor'];
  public heroeDeleted!: string;


  public removeLastHeroe(): void {
    this.heroeDeleted = this.heroes.pop() || '';
  }

  public removeItem(heroe: string): void {
    const filter = this.heroes.filter( h => {
      this.heroeDeleted = heroe;
      return h !== heroe;
    });
    this.heroes = [...filter];
  }

}
