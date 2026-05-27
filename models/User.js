class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static create(name) {
    const id = Date.now();
    return new User(id, name);
  }
}

export default User;