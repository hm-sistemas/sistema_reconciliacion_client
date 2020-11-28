export default class User {
  name: string;
  email: string;
  token: string = "";
  id: number;

  constructor(id: number, name: string, email: string) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
}
