import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-countdowner',
  templateUrl: './ng-countdowner.component.html',
  styleUrls: ['./ng-countdowner.component.css']
})
export class NgCountdownerComponent implements OnInit {
  @Input() end: any; // end date of countdown
  @Input() start: any; // start date of countdown
  @Output() timerExpired = new EventEmitter(true); // emit timer expiry
  @Output() timerStarted = new EventEmitter(true);
  @Input() countDownTimerVisible: boolean;

  countDownDate: any;
  countTimer: any;
  setInterval: any;
  currentTimeStamp: any;
  constructor() { }

  ngOnInit() {

    this.initTimer();
  }

  initTimer() {
    const start = new Date(this.start).getTime();
    const currentdate = new Date();
    const currentTimeStamp = currentdate.getTime();

    if (currentTimeStamp > start || isNaN(start)) { // check if timer has started
      this.startTimer();
    } else {
      this.countTimer = 'The timer has not started';
    }
  }

  startTimer() {
    this.countDownDate = new Date(this.end).getTime(); // end date formatted
    this.setInterval = setInterval(() => this.runTimer(), 1000);
  }

  runTimer() {
    const now = new Date().getTime(); // Getting current timestamp
    const interval = this.countDownDate - now; // Difference between current timestamp and end timestamp
    console.log('interval', interval, this.countDownDate);
    const seconds = Math.floor((interval % (1000 * 60)) / 1000); // calculating seconds
    const minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60)); // calculating minutes
    const hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // calculating hours
    const days = Math.floor(interval / (1000 * 60 * 60 * 24)); // calculating days
    this.countTimer = this.prependZero(days) + ':' + this.prependZero(hours) + ':' + this.prependZero(minutes) + ':' + this.prependZero(seconds);
// Emitting timer-end event
    if (interval < 0) {
      clearInterval(this.setInterval);
      this.timerExpired.emit({'started': this.start, 'ended': this.end});
      this.countTimer = 'Timer has expired';
    }
  }

  prependZero(digit) {

    if (digit < 10) {
      digit = digit.toString();
      const formattedNumber = '0' + digit;
      return formattedNumber;
    }
    return digit;

  }

}
