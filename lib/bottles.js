import { downTo } from './helpers';

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
          'No more bottles of beer on the wall, ' +
          'no more bottles of beer.\n' +
          'Go to the store and buy some more, ' +
          '99 bottles of beer on the wall.\n'
        );
      case 1:
        return (
          `${number} ${this.container(number)} ` +
            'of beer on the wall, ' +
          `${number} ${this.container(number)} of beer.\n` +
          `Take ${this.pronoun(number)} down and pass it around, ` +
          `${this.quantity(number-1)} bottles ` +
            'of beer on the wall.\n'
        );
      default:
        return (
          `${number} ${this.container(number)} ` +
            'of beer on the wall, ' +
          `${number} ${this.container(number)} of beer.\n` +
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
      return number;
    }
  }

  container(number) {
    if (number === 1) {
      return 'bottle';
    } else {
      return 'bottles';
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
