import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroeListComponent } from './heroes/heroe-list/heroe-list.component';

@NgModule({
  declarations: [HeroComponent, HeroeListComponent],
  imports: [CommonModule],
  exports: [HeroComponent, HeroeListComponent],
})
export class PagesModule {}
