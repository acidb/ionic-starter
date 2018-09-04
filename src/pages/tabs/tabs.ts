import { Component, ViewChild } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { ContactPage } from '../profile/profile';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('nav')
  nav: NavController;

  root = HomePage;

  pages = [
    { name: 'Home', comp: HomePage, icon: 'ios-home' },
    { name: 'Settings', comp: SettingsPage, icon: 'ios-cog' },
    { name: 'Contact', comp: ContactPage, icon: 'ios-person' }];

  navigateTo(page: any): void {
    this.nav.setRoot(page.comp);
  }

  selected(page: any): boolean {
    const activeView = this.nav.getActive();
    return activeView && activeView.component === page.comp;
  }
}
