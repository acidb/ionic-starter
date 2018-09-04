import { Component } from '@angular/core';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
    sound = {
        ring: 100,
        media: 60,
        alarm: 80
    };

    notifications = {
        enable: true,
        message: true,
        birthdays: true,
        tags: true
    };

    pinSettings = {
        template: 'dddd',
        allowLeadingZero: true,
        placeholder: '-',
        mask: '*',
        validate: function (event) {
            return {
                invalid: event.values.length != 4
            };
        }
    };

}
