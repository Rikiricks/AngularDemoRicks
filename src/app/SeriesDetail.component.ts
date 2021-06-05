import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SeasonService } from './season.service';
import { SeriesClass, ISeries } from './ISeries';
import { isSyntheticPropertyOrListener } from '@angular/compiler/src/render3/util';
@Component({
  selector: 'app-seriesdetail',
  templateUrl: './SeriesDetail.Component.html',
  providers: [SeasonService]
})

export class SeriesDetailComponent {

  Name: string;
  SeriesClass: ISeries;
    constructor(private service: SeasonService, private activatedRoute: ActivatedRoute,
                private router: Router)
    {
      this.activatedRoute.paramMap.subscribe(param => {
        this.Name = param.get('name');
      });

      // this.Name = this.activatedRoute.snapshot.params.name;
      const series = service.getSeries(this.Name);
      this.SeriesClass = new SeriesClass(series[0].Name, series[0].Type, series[0].Price);
      console.log(this.SeriesClass);
    }

    backToList(){
      this.router.navigate(['/series']);
    }
}
