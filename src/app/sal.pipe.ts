import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sal'
})
export class SalPipe implements PipeTransform {
  salutation:any;
  transform(value: any): any {
    if(value== "Male"){
      this.salutation='Mr';
    }  
    if(value== 'Female'){
      this.salutation='Miss';
    }
    return this.salutation;
  }

}
