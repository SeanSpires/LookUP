import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GroupsPage } from '../groups/groups';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tabGroups = GroupsPage;
  tabAlerts = AlertsPage;
  tabProfile = ProfilePage;
  constructor() {

  }

  public test(){
    console.log('assisant pressed');
  }
}
