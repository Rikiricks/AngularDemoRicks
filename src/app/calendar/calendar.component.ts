import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  groups = new Array(3);
  currentYear = new Date().getFullYear();

  daysArray = Array(7);
  dateList = new Array();
  constructor() { }

  ngOnInit(): void {
    this.loadMonths(2021);
  }

  change(type: string){
    if(type == 'Up'){
      this.currentYear += 1;
    }
    else{
      this.currentYear -= 1;
    }
    this.loadMonths(this.currentYear);
  }

  schedule(value: any)
  {
  }

  getArray(i: number): Array<any> {
    return Array(i);
  }

  loadMonths(year: number){
    this.days.forEach((dayName, index)=>{
    let day = [];
    this.months.forEach((v, i) =>{
      var firstDate = new Date(year,i,1 );
      var weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      let dayOfDate = weekday[firstDate.getDay()];
      
      if( dayName == dayOfDate)
      {
        day.push(v);        
      }
    });
    this.groups.splice(index,0,day);

  })
  }

  getDatesArray(): Array<Array<number>> {
    if(this.dateList.length == 0)
    for (let i = 1; i <= 7; i++) {
      const day = new Array();
      for (let j = i; j <= 35; j += 7) {
        let k = 0;
        if (k === 5) {
        break;
        }
        day.push(j);
        k += 1;
      }
      this.dateList.push(day);
    }

    return this.dateList;

  }

}

export class Dates {
  public dateList: Array<Array<number>>;

}

