import { Injectable } from '@angular/core';
import { Contact} from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASEAPIURL: string = 'https://webexpert1718.firebaseio.com/contacts.json';
const CONTACTAPIURL: string = 'https://webexpert1718.firebaseio.com/contacts/';

@Injectable()
export class ContactService {
  // contactList: Contact[];

  constructor(private http: HttpClient) {}

  getContactList(onlyFavorites: boolean): Observable<Contact[]> {
    return this.http.get(BASEAPIURL).pipe(
      map(this.parseContactData),
      map((contacts: Contact[]) => {
        return onlyFavorites ? this.filterContacts(contacts) : contacts;
      })
    );
  }

  filterContacts(contacts: Contact[]): Contact[] {
    return contacts.filter(contact => contact.isFavorite);
  }

  addContact(contact: Contact): Observable<any> {
    return this.http.post(BASEAPIURL, contact);
  }

  upDateContact(id: string, data: any): Observable<any>{
    let url: string = `${CONTACTAPIURL}${id}.json`;
    return this.http.patch(url, data);
  }

  parseContactData(rawContacts: any[]): Contact[]{
    return Object.keys(rawContacts).map(key => {
      let contact = rawContacts[key];
      return new Contact(
        contact.name,
        contact.email,
        contact.phone,
        contact.isFavorite,
        contact.avatar,
        key
      );
    });
  }
}
