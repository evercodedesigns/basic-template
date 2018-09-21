class Home {
  constructor() {
    this.message = 'Hello from Home class';
  }

  displayMessage() {
    return this.message;
  }
}

console.log((new Home()).displayMessage());