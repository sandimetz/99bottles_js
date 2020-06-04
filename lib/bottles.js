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
    return (
      `${capitalize(this.quantity(number))} ` +
        `${this.container(number)} ` +
        'of beer on the wall, ' +
      `${this.quantity(number)} ` +
        `${this.container(number)} ` +
        'of beer.\n' +
      `${this.action(number)}, ` +
      `${this.quantity(this.successor(number))} ` +
        `${this.container(this.successor(number))} ` +
        'of beer on the wall.\n'
    );
  }

  quantity(number) {
    return new BottleNumber(number).quantity();
  }

  container(number) {
    return new BottleNumber(number).container();
  }

  action(number) {
    return new BottleNumber(number).action();
  }

  successor(number) {
    return new BottleNumber(number).successor();
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  quantity() {
    if (this.number === 0) {
      return 'no more';
    } else {
      return this.number.toString();
    }
  }

  container() {
    if (this.number === 1) {
      return 'bottle';
    } else {
      return 'bottles';
    }
  }

  action() {
    if (this.number === 0) {
      return 'Go to the store and buy some more';
    } else {
      return (
        `Take ${this.pronoun()} down and pass it around`
      );
    }
  }

  pronoun() {
    if (this.number === 1) {
      return 'it';
    } else {
      return 'one';
    }
  }

  successor(number) {
    if (arguments.length !== 0) {
      throw new Error('wrong number of arguments');
    }
    if (this.number === 0) {
      return 99;
    } else {
      return this.number - 1;
    }
  }
}

export { Bottles };
