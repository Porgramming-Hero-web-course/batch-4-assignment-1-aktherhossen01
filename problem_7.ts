
class Car  {
    carType: string;
    model: string;
    year: number


    constructor(carType:string,model:string,year:number){
        this.carType= carType;
        this.model= model;
        this.year= year
    }
    getCarAge(): number {
        const currentDate = new Date().getFullYear();
        return currentDate - this.year;
      }
}

const car = new Car("Honda",'5jiu', 2018);
console.log(car.getCarAge());
//  ;