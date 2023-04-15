import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() title?: string;

  public counter: number = 10;

  public incrementBy(): void {
    this.counter += 1;
  }

  public decrementBy(): void {
    if (this.counter === 0) {
      return;
    }

    this.counter -= 1;
  }

  public reset(): void {
    this.counter = 0;
  }

}
