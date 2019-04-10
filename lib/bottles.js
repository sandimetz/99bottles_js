import { capitalize, downTo } from './helpers';

class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(starting, ending) {
    return downTo(starting, ending)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    const bottleNumber = this.bottleNumberFor(number);
    const nextBottleNumber =
      this.bottleNumberFor(bottleNumber.successor());

    return (
      capitalize(`${bottleNumber} of beer on the wall, `) +
      `${bottleNumber} of beer.\n` +
      `${bottleNumber.action()}, ` +
      `${nextBottleNumber} of beer on the wall.\n`
    );
  }

  bottleNumberFor(number) {
    let bottleNumberClass;
    if (number === 0) {
      bottleNumberClass = BottleNumber0;
    } else {
      bottleNumberClass = BottleNumber;
    }

    return new bottleNumberClass(number);
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  quantity() {
    return this.number.toString();
  }

  container() {
    if (this.number === 1) {
      return 'bottle';
    } else {
      return 'bottles';
    }
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around`;
  }

  pronoun() {
    if (this.number === 1) {
      return 'it';
    } else {
      return 'one';
    }
  }

  successor() {
    return this.number - 1;
  }
}

class BottleNumber0 extends BottleNumber {
  quantity() {
    return 'no more';
  }

  action() {
    return 'Go to the store and buy some more';
  }

  successor() {
    return 99;
  }
}

class BottleNumber1 extends BottleNumber {
}

export { Bottles };
