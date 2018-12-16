# NgCountdowner

NgCountdowner is a configurable Angular 6 countdown timer. Demo [here](https://ng-countdowner.firebaseapp.com/){:target="_blank"}.



```
<app-ng-countdowner
   [countDownTimerVisible]="true"
   [start]="'10/5/2017 20:21:40'"
   [end]="'11/1/2019 00:00'"
   [expiryMessage]="'This is a custom expiry message'"
   (timerExpired)="handleEvent($event)"
</app-ng-countdowner>
```

## Configuration fields
| Property              | Description                                      | Default value | Format             | Required | Data type |
| :-------------------- | :----------------------------------------------- | :------------ | :----------------- | :------- | :-------- |
| countDownTimerVisible | Enable countdown timer                           | true          | N                  | boolean  |
| expiryMessage         | Custom message to display once countdown expires |               | N                  | string   |
| start                 | start date of countdown timer                    |               | mm/d/yyyy hh:mm:ss | N        | string    |
| end                   | end date of countdown timer                      |               | mm/d/yyyy hh:mm:ss | Y        | string    |

## Events
| Events       | Description               | Data   |
| :----------- | :------------------------ | :----- |
| timerExpired | emits when countdown ends | object |


