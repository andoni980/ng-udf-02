import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>
        <button (click)="changeCounter(-1)">-1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="changeCounter(+1)">+1</button>

                `
})

export class CounterComponent {
    public counter: number = 10;

    changeCounter(value: number): void {
        (value > 0) ? this.counter++ : this.counter--;
    }

    resetCounter() {
        this.counter = 10;
    }

}