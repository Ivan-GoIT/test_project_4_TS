class Key {
  argument: string = 'key_argument';
}

class Person {}

abstract class House {
  protected door: 'open' | 'close' = 'close';
  protected key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }
  comeIn(tenant: Person) {
    if (this.door === 'open') this.tenants.push(tenant);
    else throw new Error('Door is close');
  }
    
   abstract openDoor(key:Key):boolean
}

// class MyHouse extends House {
//   showMe() {
//     console.log(this.door, ' ', this.key);
//   }
// }

const key = new Key();

const myHouse = new MyHouse(key);
