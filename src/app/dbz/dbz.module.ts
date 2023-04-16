import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { ListaComponent } from './components/lista/lista.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexComponent,
    ListaComponent,
    AdicionarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [IndexComponent]
})
export class DbzModule { }
