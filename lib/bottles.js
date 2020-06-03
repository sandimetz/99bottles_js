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
    return new BottleNumber(number).quantity(number);
  }

  container(number) {
    return new BottleNumber(number).container(number);
  }

  action(number) {
    return new BottleNumber(number).action(number);
  }

  pronoun(number) {
    return new BottleNumber(number).pronoun(number);
  }

  successor(number) {
    new BottleNumber(number).successor(number);
    if (number === 0) {
      return 99;
    } else {
      return number - 1;
    }
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  quantity(number) {
    if (number === 0) {
      return 'no more';
    } else {
      return number.toString();
    }
  }

  container(number) {
    if (number === 1) {
      return 'bottle';
    } else {
      return 'bottles';
    }
  }

  action(number) {
    if (number === 0) {
      return 'Go to the store and buy some more';
    } else {
      return (
        `Take ${this.pronoun(number)} down and pass it around`
      );
    }
  }

  pronoun(number) {
    if (number === 1) {
      return 'it';
    } else {
      return 'one';
    }
  }

  successor(number) {
    if (number === 0) {
      return 99;
    } else {
      return number - 1;
    }
  }
}

export { Bottles };
