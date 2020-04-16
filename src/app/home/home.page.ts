import { Component, OnInit } from '@angular/core';
import { Contacts } from '@ionic-enterprise/contacts/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private contacts: Contacts) { }

  async ngOnInit() {
    const contacts = await this.contacts.find(['*']);
    console.log(contacts);
  }

}
