import { Component } from '@angular/core';


import { ClientPage } from '../client/client';
import { TicketsPage } from '../tickets/tickets';
import { NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = ClientPage;
  tab2Root = TicketsPage;

constructor() {
	
}
	 
}
