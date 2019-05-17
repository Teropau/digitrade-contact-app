export class Contact {
  firstName: string;
  lastName: string;
  phone: string;

  constructor(phone?: string, firstName?: string, lastName?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}
