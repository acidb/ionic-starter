import { Component } from '@angular/core';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ContactPage {

  now: Date = new Date();

  langData = [{ value: 'en', text: 'English' }, { value: 'de', text: 'Deutsch' }, { value: 'it', text: 'Italiano' }];

  languageSettings = {
    theme: 'ios',
    data: this.langData
  };

  contentSettings = {
    theme: 'ios'
  };

  birthdaySettings = {
    theme: 'ios',
    max: new Date(this.now.getFullYear() - 18, 11, 31)
  };

  birthday = new Date(1987, 2, 25);

  language = 'en';

  gender = 'female';

}
