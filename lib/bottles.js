import { capitalize, downTo } from './helpers';

class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    const bottleNumber = BottleNumber.for(number);

    return (
      capitalize(`${bottleNumber} of beer on the wall, `) +
      `${bottleNumber} of beer.\n` +
      `${bottleNumber.action()}, ` +
      `${bottleNumber.successor()} of beer on the wall.\n`
    );
  }
}

class BottleNumber {
  static for(number) {
    let bottleNumberClass;

    bottleNumberClass = [
      BottleNumber6,
      BottleNumber1,
      BottleNumber0,
      BottleNumber,
    ].find(candidate => candidate.canHandle(number));

    bottleNumberClass = {
      0: BottleNumber0,
      1: BottleNumber1,
      6: BottleNumber6,
    }[number] || BottleNumber;

    return new bottleNumberClass(number);
  }

  static canHandle(number) {
    return true;
  }

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
    return 'bottles';
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around`;
  }

  pronoun() {
    return 'one';
  }

  successor() {
    return BottleNumber.for(this.number - 1);
  }
}

class BottleNumber0 extends BottleNumber {
  static canHandle(number) {
    return number === 0;
  }

  quantity() {
    return 'no more';
  }

  action() {
    return 'Go to the store and buy some more';
  }

  successor() {
    return BottleNumber.for(99);
  }
}

class BottleNumber1 extends BottleNumber {
  static canHandle(number) {
    return number === 1;
  }

  container() {
    return 'bottle';
  }

  pronoun() {
    return 'it';
  }
}

class BottleNumber6 extends BottleNumber {
  static canHandle(number) {
    return number === 6;
  }

  quantity() {
    return '1';
  }

  container() {
    return 'six-pack';
  }
}

export { Bottles };
