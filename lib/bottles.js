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
    switch (number) {
      case 0:
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
      default:
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
  }

  successor(number) {
    if (number === 0) {
      return 99;
    } else {
      return number - 1;
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

  quantity(number) {
    if (number === 0) {
      return 'no more';
    } else {
      return number.toString();
    }
  }

  pronoun(number) {
    if (number === 1) {
      return 'it';
    } else {
      return 'one';
    }
  }

  container(number) {
    if (number === 1) {
      return 'bottle';
    } else {
      return 'bottles';
    }
  }
}

export { Bottles };
