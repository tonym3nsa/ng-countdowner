# NgCountdowner

NgCountdowner is a configurable Angular 6 countdown timer.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

```
<ng-countdowner
        [countDownTimerVisible]="true"
        [start]="'10/5/2017 20:21:40'"
        [end]="'11/1/2019 00:00'"
        (timerExpired)="handleEvent($event)"
</ng-coundowner>
```
