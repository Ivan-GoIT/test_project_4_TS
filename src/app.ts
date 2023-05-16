class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  public name: string = 'user';
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: 'open' | 'close' = 'close';
  protected tenants: Person[] = [];

  constructor(protected key: Key) { }
  
  comeIn(tenant: Person): void {
    if (this.door !== 'open') throw new Error('Door is close')
    this.tenants.push(tenant);
    console.log('Person inside');
  }

  showTenants() {
    console.log(this.tenants);
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key) {
    this.door = key.getSignature() === this.key.getSignature() ? 'open' : 'close';
  }
}

const key = new Key();

const myHouse = new MyHouse(key);

const user = new Person(key);

myHouse.openDoor(key);

myHouse.comeIn(user);

myHouse.showTenants();
