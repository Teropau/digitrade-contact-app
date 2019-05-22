import {ContactHttpService} from './contact-http.service';

export class Contact {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: any[];


  constructor(firstName?: string, lastName?: string, phone?: string, email?: string, address?: IAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.address = [];
  }
}

interface IAddress {
  street: string;
  postalCode: string;
  city: string;
}
