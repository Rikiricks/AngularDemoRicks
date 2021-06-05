import {Injectable} from '@angular/core';
import {ISeries, IJsonList, JsonClass} from './ISeries';
// import { HttpModule } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, retryWhen, delay , take, scan} from 'rxjs/operators';

@Injectable()
export class SeasonService{

    singletonObj = 'red';
    constructor(private http: HttpClient){
    }
    // public  getJsonList(): Observable<HttpResponse<IJsonList[]>> {
    //    return this.http.get<IJsonList[]>('http://jsonplaceholder.typicode.com/posts', { observe: 'response' });
    // }
    // public  getJsonList(): Observable<IJsonList[]> {
    //     return this.http.get<IJsonList[]>('http://jsonplaceholder.typicode.com/posts');
    //  }
    public  getJsonList() {
        return this.http.get<JsonClass[]>('http://jsonplaceholder.typicode.com/posts').
        // pipe(retryWhen(errors =>
        //      errors.pipe(scan(rCount =>
        //         {
        //             rCount += 1;
        //         }, 0)
        //      ) )
        //      , catchError(this.handleError)
        //      );
        pipe(retryWhen(errors => errors.pipe(delay(1000), take(4))), catchError(this.handleError) );
        // pipe(retry(4), catchError(this.handleError));
     }

     public getSeries(Name: string)
     {
         const seriesList = [{Name : 'Breaking Bad', Type : 'Crime', Price: '520.20'},
         { Name : 'Money Heist', Type : 'Crime', Price: '452'},
         { Name: 'Original', Type : 'Drama', Price: '320.265'},
               ];

         return seriesList.filter(a => a.Name === Name);
     }

     handleError(error){
         let msjError = '';

         if (error.error instanceof ErrorEvent)
         {
             // client-side
             msjError = `Error: ${error.error.message}`;
         }
         else{
             msjError = `Hey Yoo! Error Code: ${error.status} \nMessage: ${error.message}.`;
         }
        console.error(error);
        return throwError(msjError);
    }
}
