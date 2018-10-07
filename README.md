# NgCountdowner

NgCountdowner is a configurable Angular 6 countdown timer.


```
<app-ng-countdowner
   [countDownTimerVisible]="true"
   [start]="'10/5/2017 20:21:40'"
   [end]="'11/1/2019 00:00'"
   (timerExpired)="handleEvent($event)"
</app-ng-countdowner>
```

## Configuration fields
| Property  | Description | Default value |Format| Required |
| :----------- | :------------- | :--------------- | :---------- |:---------- |
| countDownTimerVisible | Enable countdown timer | true || N |
| start     | start date of countdown timer | | mm/d/yyyy hh:mm:ss| N |
| end    | end date of countdown timer |  | mm/d/yyyy hh:mm:ss| Y |

## Events
| Events  | Description| Data
| :----------- | :------------- | :------------ | 
| timerExpired  | emits when countdown ends| object |


