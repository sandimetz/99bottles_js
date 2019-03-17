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
    switch (number) {
      case 0:
        return (
          `${capitalize(this.quantity(number))} ` +
            `${this.container(number)} ` +
            'of beer on the wall, ' +
          `${this.quantity(number)} ` +
            `${this.container(number)} ` +
            'of beer.\n' +
          'Go to the store and buy some more, ' +
          '99 bottles of beer on the wall.\n'
        );
      default:
        return (
          `${capitalize(this.quantity(number))} ` +
            `${this.container(number)} ` +
            'of beer on the wall, ' +
          `${this.quantity(number)} ` +
            `${this.container(number)} ` +
            'of beer.\n' +
          `Take ${this.pronoun(number)} down and pass it around, ` +
          `${this.quantity(number-1)} ` +
            `${this.container(number-1)} ` +
            'of beer on the wall.\n'
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
}

export { Bottles };
