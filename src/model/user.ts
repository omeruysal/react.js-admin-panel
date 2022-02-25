import { Role } from '../model/role';
export class User {
  constructor(
    public id = 0,
    public firstName = '',
    public lastName = '',
    public email = '',
    public role = new Role()
  ) {}
  get nameAndLastname() {
    return this.firstName + this.lastName;
  }
}
