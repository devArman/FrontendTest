import {PipeTransform, Pipe} from '@angular/core'

@Pipe({
  name: 'weekDay'
})

export class WeekDay implements PipeTransform {

  public dayList:Array<string> =
    [
      'sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
    ];
  transform(date:string): any
  {
    var day = new Date(date).getDay();
    return this.dayList[day];
  }
}
