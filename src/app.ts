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
  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: 'open' | 'close' = 'close';
  protected key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key.getSignature();
  }
  comeIn(tenant: Person): void {
    if (this.door === 'open') this.tenants.push(tenant);
    else throw new Error('Door is close');
  }

  showTenants() {
    console.log(this.tenants);
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    this.door = key.getSignature() === this.key ? 'open' : 'close';
  }
}

const key = new Key();

const myHouse = new MyHouse(key);

const user = new Person(key);

myHouse.openDoor(key);

myHouse.comeIn(user);

myHouse.showTenants();
