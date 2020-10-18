import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactApp';
  myContact: Contact;
  contactList: Contact[] = [
    new Contact('jane doe', 'jane.doe@gmail.com', '011245585', true, 'assets/avatar.png'),
    new Contact('Dries Swinnen', 'dries.swinnen@gmail.com', '011245585', true, 'assets/avatar.png'),
    new Contact('Marijke Clijsters', 'marijke.clijsters@gmail.com', '089810800', true, 'assets/avatar.png')
    ];

  ngOnInit(): void {
    this.myContact = new Contact(
      'John Doe',
      'john.doe@gmail.com',
      '0116642132558',
      true,
      'assets/avatar.png'
    );
  }

  handleData(event: Contact){
    console.log('Received data!, event');
  }

  createContact(event: Contact){
    this.contactList.push(event);
  }
}
