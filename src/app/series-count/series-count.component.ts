import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-series-count',
  templateUrl: './series-count.component.html',
  styleUrls: ['./series-count.component.css']
})
export class SeriesCountComponent {

  selectedRadioButtonValue = 'All';

 @Output()
  changedRadioButtonValue = new EventEmitter<string>();

 @Input()
 all: string;

 @Input()
 crime: string;

 @Input()
 drama: string;

 ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
 }

 onChangeOfRadioButton()
 {
   this.changedRadioButtonValue.emit(this.selectedRadioButtonValue);
   console.log(this.selectedRadioButtonValue);
 }

}
