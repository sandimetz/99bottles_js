class Bottles {
  verses(starting, ending) {
    if (starting === 99) {
      return this.verse(99) + '\n' + this.verse(98);
    } else {
      return this.verse(2) + '\n' + this.verse(1) +
        '\n' + this.verse(0);
    }
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
          '1 bottle of beer on the wall, ' +
          '1 bottle of beer.\n' +
          'Take it down and pass it around, ' +
          'no more bottles of beer on the wall.\n'
        );
      case 2:
        return (
          '2 bottles of beer on the wall, ' +
          '2 bottles of beer.\n' +
          'Take one down and pass it around, ' +
          '1 bottle of beer on the wall.\n'
        );
      default:
        return (
          `${number} bottles of beer on the wall, ` +
          `${number} bottles of beer.\n` +
          'Take one down and pass it around, ' +
          `${number-1} bottles of beer on the wall.\n`
        );
    }
  }
}

export { Bottles };
