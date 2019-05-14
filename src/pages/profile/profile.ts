import { Component } from '@angular/core';
import { MbscDatetimeOptions } from '@mobiscroll/angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ContactPage {
  now = new Date();
  langData = [{
    value: 'en',
    text: 'English'
  }, {
    value: 'de',
    text: 'Deutsch'
  }, {
    value: 'it',
    text: 'Italiano'
  }];

  birthdaySettings: MbscDatetimeOptions = {
    max: new Date(this.now.getFullYear() - 18, 11, 31)
  };

  birthday = new Date(1987, 2, 25);
  language = 'en';
  gender = 'female';
}
