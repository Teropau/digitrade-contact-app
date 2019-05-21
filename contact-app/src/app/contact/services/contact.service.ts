import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor() {
    this.contacts = [
    new Contact('666', 'Aku', 'Ankka'),
    new Contact('444', 'Roope', 'Ankka'),
    new Contact('333', 'Hannu', 'Hanhi')
    ];
  }
  get(): Contact[] {
    return this.contacts;
  }
}
