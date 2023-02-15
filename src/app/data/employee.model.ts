export class Employee{
    public id: number;
    public lastName: string;
    public firstName: string;
    public cellPhone: string;
    public phone: string;
    public email: string;
    public siteId:number;
    public serviceId:number;
}   
export class Service {
    public id:number;
    public name:string;
}

export class Site {
    public id:number;
    public city:string;
}