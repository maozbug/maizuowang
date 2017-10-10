import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateweek'
})
export class DateweekPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var newdate=parseInt(value);
    var newdates= new Date(newdate);
    var day=newdates.getDay();
    var show_day=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
    var weekday=show_day[day];
    return weekday;
  }

}
