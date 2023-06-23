import { Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <p>{{counter}}</p>

        <button (click)="increaseBy(3)">+1</button>
        <button (click)="resetValue()">Reset</button>
        <button (click)="decreaseBy(3)">-1</button>
    `
})

export class CounterComponent{
    public title:string = 'Welcome to Angular';
    public counter:number = 10;
    public initialCounter:number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    decreaseBy(value: number):void{
        this.counter -= value;
    }

    resetValue(): void{
        this.counter = this.initialCounter;
  }
}