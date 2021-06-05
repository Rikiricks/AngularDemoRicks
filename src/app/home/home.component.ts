import { Component } from '@angular/core';
import { SeasonService } from '../season.service';

@Component({
  template: `<div>
              Well come to home page.
              Singleton: <input type='text' [(ngModel)] = 'color' [style.background]='color'>
            </div>
            `
})

export class HomeComponent {

  constructor(private seasonService: SeasonService)
  {

  }

  get color(): string {
    return this.seasonService.singletonObj;
  }

  set color(value: string) {
    this.seasonService.singletonObj = value;
  }

}
