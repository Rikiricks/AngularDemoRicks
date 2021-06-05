export interface ISeries{
    Name: string;
    Type: string;
    Price: string;
    Year?: string;

    // GetTotalSeries(): ISeries[];
}

export interface IJsonList{
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class JsonClass
{
    userId: number;
    id: number;
    title: string;
    body: string;

    constructor(userId: number, id: number, title: string, body: string){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;

    }
}
export class JsonChildClass implements IJsonList
{
    constructor(public userId: number, public  id: number, public body: string, public title: string)
    {

    }
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
}

export class SeriesClass implements ISeries{
    // Name: string;
    // Type: string;
    // Price: string;

    constructor(public Name: string, public Type: string, public Price: string){

    }
    Year?: string;
    // GetTotalSeries(): ISeries[] {
    //     throw new Error("Method not implemented.");
    // }

    // GetTotalSeries(): number {
    //     throw new Error("Method not implemented.");
    // }

}
