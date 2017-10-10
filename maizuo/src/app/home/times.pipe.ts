import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'times'
})
export class TimesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var newdate=parseInt(value);
    var newdates= new Date(newdate);
//  console.log(newdates)
    var month=newdates.getMonth()+1;
    var date=newdates.getDate(); 
    var comeDate=month+"月"+date+"日"
    return comeDate;
  }

}
