export class User {
  name: string;
  email: string;
  id: number;

  constructor(id: number, name: string, email: string) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
}
