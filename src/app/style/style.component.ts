import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISeries, IJsonList, JsonClass, JsonChildClass} from '../ISeries';
import {SeasonService} from '../season.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'],
  // providers: [SeasonService]
})
export class StyleComponent implements OnChanges, OnInit {

  subscription: Subscription;

  constructor(private seasonService: SeasonService) {
    // this.serieses = [{Name : 'Breaking Bad', Type : 'Crime', Price: '520.20'},
    // { Name : 'Money Heist', Type : 'Crime', Price: '452'},
    // { Name: 'Original', Type : 'Drama', Price: '320.265'},
    //       ];
   this.subscription = seasonService.getJsonList().
        subscribe(response =>
          {
            // this.jsonList = response.slice(0, 5);

            // this.jsonList = response.body.slice(0, 5);

            // this.jsonClass = response.map(item =>
            //   {
            //     return new JsonClass(
            //         item.id,
            //         item.userId,
            //         item.body,
            //         item.title
            //     );
            //   }).slice(0, 10);

            this.jsonChildClass = response.map(item =>
              {
                return new JsonChildClass(
                  item.id,
                  item.userId,
                  item.body,
                  item.title
                );
              }).slice(0, 10);


            // console.log(this.jsonChildClass);
          }, error => { console.log(error); this.errorMessage = error; });
  }
  iObject: ISeries = {
    Name: 'riki',
    Type: 'man',
    Price: '1'
  } as ISeries;


  jsonList: IJsonList[];
  jsonClass: JsonClass[];
  jsonChildClass: JsonChildClass[];
  title = 'Style Examples!';
  titleForm = 'Form Module';
  blueColor = 'blue';
  twoWay =  'Riki'; //this.iObject.Name;
  serieses: ISeries[];
  radioButtonSelectedValue = 'All';
  errorMessage: string;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges ): void {
    //  for (let propChange in changes)  {
    //    let change = changes[propChange];
    //    let current = JSON.stringify(change.currentValue);
    //    let previous = JSON.stringify(change.previousValue);
    //    console.log(change+','+current+','+previous)
    //   //  console.log('Property:${change} CurrentValue: ${current} PreviousValue: ${previous}')
    //  }
  }

  cancelRequest()
  {
    this.subscription.unsubscribe();
  }


  ngOnInit(): void {
    this.serieses = [{Name : 'Breaking Bad', Type : 'Crime', Price: '520.20'},
    { Name : 'Money Heist', Type : 'Crime', Price: '452'},
    { Name: 'Original', Type : 'Drama', Price: '320.265'},
          ];
  }

  get color(): string {
    return this.seasonService.singletonObj;
  }

  set color(value: string) {
    this.seasonService.singletonObj = value;
  }

  getValueFromChildComponet(selected: string)
  {
    this.radioButtonSelectedValue = selected;
  }

  GetStyle(): any {
    const style1 = {
      // tslint:disable-next-line: object-literal-key-quotes
      'color' : 'green',
      'font-weight' : 'bold',
      'font-size' : 'larger'
    };
    return style1;
  }

  loadSeries(){
    this.serieses = [{Name : 'Breaking Bad', Type : 'Crime', Price: '520.20'},
            { Name : 'Money Heist', Type : 'Crime', Price: '452'},
            { Name: 'Original', Type : 'Drama', Price: '320.265'},
            { Name: 'Friends', Type : 'Drama', Price: '500.1'}
          ];
  }
  trackByFunction(index: number, employee: any ): string
  {
    return employee.Name;
  }

  allSeriesCount()
  {
    return this.serieses.length;
  }
  dramaSeriesCount()
  {
    return this.serieses.filter(a => a.Type === 'Drama').length;
  }
  crimeSeriesCount()
  {
    return this.serieses.filter(a => a.Type === 'Crime').length;
  }

}
