import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {
  currentYear:any;
  yearOfJoin:any;
  experience:any;
  

  transform(value: any): any {
    this.currentYear=new Date().getFullYear();
    this.yearOfJoin=new Date(value).getFullYear();
    this.experience=this.currentYear - this.yearOfJoin;
    

    return this.experience;
  }

}
